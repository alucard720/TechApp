const express = require('express')
const router = express.Router();
const multer = require('multer')
const sharp = require('sharp')
const fs = require('fs')

const storage = multer.memoryStorage();
const uploads = multer({storage})

router.post('/create', uploads.single('thumbnail'),async (req, res)=>{
    console.log('file', req.file)
    console.log('body', req.body)

    fs.access('./data/uploads', (err)=>{
        if(err){
            fs.mkdirSync('./data/uploads');
        }

    })

    await sharp(req.file.buffer).resize({width:615, height:615}).toFile('./data/uploads' + req.file.originalname)
    res.send('submit ok')
})

module.exports = router;