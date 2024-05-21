const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const { MongoClient } = require('mongodb')
const client = new MongoClient('mongodb://localhost:27017')
const app=express();
app.use(express.json())
app.use(cors());
app.use(bodyParser.urlencoded({
    extended:true
}))
app.post("/blooddonar",function(req,res){
    var name=req.body.name;
  
    var age=req.body.age
    var bloodGroup=req.body.bloodGroup
    var city=req.body.city

    var phonenumber=req.body.phonenumber
    client.db('bloodapp').collection('donar').insertOne({name:name,age:age,bloodGroup:bloodGroup,city:city,phonenumber:phonenumber})
    .then(response=>{
        console.log("inserted");
        res.send("true")
    })

})
app.post('/finddonar',function(req,res){
    var bloodGroup=req.body.bloodGroup
    client.db('bloodapp').collection('donar').find({bloodGroup:bloodGroup}).toArray()
    .then(response=>{
        res.send(response)
        console.log("founded")
    })
})

app.listen(5000,function(){
    console.log("sever is running");
})


