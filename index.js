const express = require("express");
const app = express()
const bodyParser = require("body-parser");
const mongoose =require("mongoose");
const port =3000;
const TODO=require("./models/todo");
const { response } = require("express");
const todo = require("./models/todo");

app.set("view engine","ejs");
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended :true}))
app.use(bodyParser.json())

const dburl="mongodb://127.0.0.1:27017/TO-DO_DB";
mongoose.v=mongoose.connect(dburl);




app.get ("/",(request,response)=>{
    TODO.find()
    .then(result=>{
        response.render("index",{data:result})
        
    })
})

app.post("/",(request,response)=>{
    
       
       
  
    const todo=new TODO({
        
        todo :request.body.todoValues
    })
    todo.save()
    .then(result=>{
        response.redirect("/")
    })
})


app.delete("/:id",(request,response)=>{
    TODO.findByIdAndDelete(request.params.id)
    then(result=>{
        console.log(result);
    })
})
app.listen(port,()=>{
    console.log("app launched 🚀 on port "+port);
})