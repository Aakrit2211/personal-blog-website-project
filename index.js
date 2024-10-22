import express from "express";
import bodyParser from "body-parser";
let items=[]
const app=express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))


app.get("/",(req,res)=>{
  
    res.render("index.ejs", { items: items} );
})

app.get("/home",(req,res)=>{
    res.render("index.ejs", { items: items });
    
})
app.get("/create",(req,res)=>{
    res.render("create.ejs");
})
app.get("/contact",(req,res)=>{
    res.render("contact.ejs");
})
app.get("/edit/:index", (req,res)=>{
    const index = Number( req.params.index);
    const item=items[index]
    res.render("edit.ejs",{item: item, index:index});
})
app.post("/submit",(req,res)=> {
    const{title,content}=req.body;
   items.push({cnt:content,ttl:title})
    res.redirect("/")
});
app.post("/clear",(req,res)=>{
    items=[]
    res.redirect("/")
});
app.post("/submit-contact", (req, res) => {
    const { name, email, subject, message } = req.body;
    console.log(`Name:${name} Email:${email} Subject:${subject} Message:${message}`);
    res.redirect("/");
});
app.post("/edit/:index", (req, res) => {
    const index = Number( req.params.index);
    items[index] = { ttl: req.body.title, cnt: req.body.content };
    res.redirect("/");
});

app.post("/delete/:index",(req,res)=>{
    const index = Number( req.params.index);
    if (!isNaN(index) && index >= 0 && index < items.length) {
        items.splice(index, 1); 
    }
    res.redirect("/")
})
app.listen(3000, ()=>{
    console.log("working");
}) 
