const express =require("express");
const app=express();

const bodyparser=require("body-parser");
let  date=require(__dirname +"/date.js")
var items=["BUY FOOD","COOK FOOD","DRINK AND ENJOY"]
var worklistitem=[]
app.use(bodyparser.urlencoded({extended:true}))

app.use(express.static("public"))

app.set('view engine', 'ejs');


app.get("/",(req,res)=>{
     let day=date.getday()
    res.render("list", {
        listTitle:day,list:items 
    })
})  

app.post("/",(req,res)=>{
  var listitem=req.body.list;
  if(req.body.list==="work"){
      worklistitem.push(listitem);
      res.redirect("/work");
  }
  else{
  items.push(listitem);
  res.redirect("/")
  }
})

app.get("/work",(req,res)=>{

    res.render("list",{listTitle:"Work List",
        list:worklistitem
    })
})

app.post("/work",(req,res)=>{
    const newitem=req.body.newitem;
     worklistitem.push(newitem)
    res.redirect("/work")
})



app.get("/about",(req,res)=>{
    res.render("about");
})
app.listen(3000,()=>{
    console.log("server started at port 3000");

})
 
