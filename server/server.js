const express = require('express')

const userRouter = require('./user')

const app = express()

app.use('/user', userRouter)
app.get('/', (req, res) => {
    res.send('hello zhangyuhong3')
})
app.listen(9093, function () {
    console.log('Node app start at port 9093')
})