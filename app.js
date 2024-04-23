if(process.env.NODE_ENV!="production")
{
    require("dotenv").config();
    
}

const express=require("express");
const app=express();
const ejsmate=require("ejs-mate");

const path=require("path");
const {run}=require("./utils/gemini.js");
const {validateSchema}=require("./middleware.js")
const ExpressError=require("./utils/ExpressError.js");




app.set('view engine',"ejs");
app.engine("ejs",ejsmate);
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"/public")));
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.use(async (req,res,next)=>{
    
    
       if(req.body.project)
       {
        for(let i=0;i<(req.body.project).length;i+=2)
        {   
            let pro_desc=await run(`'project name:${req.body.project[i]}and project details:${req.body.project[i+1]}', write a concised summary based on these details in a single pargraph less than 100 words `);
            
            req.body.project[i+1]=pro_desc;
        }
       }
    if(req.body.achievements && (req.body.achievements[0] || req.body.achievements[1])){
       
        for(let i=0;i<(req.body.achievements).length;i++){
                let achieve=await run("'"+req.body.achievements[i]+"'"+"make the given details into much efficient");
                req.body.achievements[i]=achieve;
         }
     }
     if(req.body.experience && (req.body.experience[0] ||req.body.experience[1]||req.body.experience[2]))
     {  
        for(let i=0;i<(req.body.experience).length;i+=3)
        {
            let exp=await run(`i have worked as ${req.body.experience[i]} in ${req.body.experience[i+1]} and here is my experience:${req.body.experience[i+2]}' ,write a concised summary based on these details in a single pargraph less than 100 words `);
            
            req.body.experience[i+2]=exp;
        }
     }
     
    next();
})


app.get("/",(req,res)=>{
    res.render("./templates/home.ejs",{currpage:"home"});
})
app.get("/templates/new",(req,res)=>{
    res.render("./templates/form.ejs",{currpage:"form"});
})

app.get("/templates",(req,res)=>{
   
    res.render("./templates/home.ejs",{currpage:"home"});
})

app.post("/templates",validateSchema,(req,res)=>{
    let data=req.body;
    res.render("./templates/resume.ejs",{data,currpage:"resume"});

})



app.get("/view/:id",(req,res)=>{
    let {id}=req.params;
    res.render("./templates/view1.ejs",{id,currpage:"view"});
})

app.get("/templates/download",(req,res)=>{
    res.render("./templates/result.ejs",{data});
});

app.all("*",(req,res)=>{
    throw new ExpressError(404,"page not found");
})
app.use((err,req,res,next)=>{
   let {status=500,message="some internal error"}=err;
    res.status(status).render("./templates/error.ejs",{message,currpage:"error"});
})
app.listen(3000,(req,res)=>{
    console.log("server started listening to port 3000");
})
