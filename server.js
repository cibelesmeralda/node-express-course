const express = require('express')
const app = express()

const mockUserData=[
    {name:'Cibe'},
    {name:'MAti'}
]
app.get('/users', function(req,res){
    res.json({
        success: true,
        message: 'successfully got users, nice!',
        users: mockUserData
    })
})

app.listen(8000, function(){
    console.log("server is running")
})

