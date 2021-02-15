const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())

const mockUserData=[
    {name:'Cibe'},
    {name:'MAti'}
]

app.get('/users/:id', function(req,res){
    console.log(req.params.id)
    res.json({
        success: true,
        message: 'got one user',
        users: req.params.id
    })
})

app.post('/login',function(req,res){
    const username = req.body.username
    const password = req.body.password
    
    const mockUsername = "cibe"
    const mockPassword = "pass"

    if(username == mockUsername && password == mockPassword){
        res.json({
            success: true,
            message: 'passwordn and username match',
            token: 'encripted token goes here'
        })
    } else {
        res.json({
            success: false,
            message: 'password and username do not match'
        })
    }
})

app.listen(8000, function(){
    console.log("server is running")
})

