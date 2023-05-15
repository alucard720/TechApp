const express = require('express')
const router = express.Router();

router.post('/', (req, res)=>{

    res.send('some news')
} )

module.exports = router;