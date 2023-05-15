const express = require('express')
const newsRouter = require('./routers/news')
const app = express();

app.use(express.static('public'))
app.use('api', newsRouter) 





app.listen(5000,()=>{
    console.log('port listening')
})