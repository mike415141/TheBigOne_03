const express = require("express");
const bodyParser = require("body-parser");
const  mongoose = require("mongoose");
const path = require("path");
const Product = require("./models/product");
var methodOverride = require('method-override')

mongoose.connect("mongodb+srv://mcompany4151:r06l3cPOI4FIKktV@cluster0.wj0zkmz.mongodb.net/db_new_test_002?retryWrites=true&w=majority")
.then(()=>{
console.log("Connected to mongoose ");

}).catch((error)=>{

console.log(error);

});



const _portNumber = 4002;


const app = express();
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.set("views", path.join(__dirname,"views"));
app.use(methodOverride('_method'));

app.use(bodyParser.json())


////This  finds all products.
app.get("/p",async(req,res)=>{
 const _p =  await Product.find({});
    res.render("index",{_p});


});



//// This show  all new Products.
app.get("/p/new",(req,res)=>{

      res.render("new");

});


/////This gets all products. This is a post.
app.post("/p",async(req,res)=>{

const  newP = await new Product(req.body);
 await newP.save();
res.redirect(`/p/${newP._id}`);

});

////This shows  all the products.
app.get("/p/:id",async(req,res)=>{
const {id} = req.params;
const _p = await Product.findById(id);
res.render("show",{_p});


});




app.get("/p/:id/edit",async(req,res)=>{
const {id} = req.params;
const _p = await Product.findById(id);
res.render("edit",{_p});


});



app.put('/p/:id', async (req, res) => {
    const { id } = req.params;
    const _p = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
    res.redirect(`/p/${_p._id}`);
})

app.delete("/p/:id",async(req,res)=>{
    const { id } = req.params;
    const deletedProduct = await   Product.findByIdAndDelete(id);
    res.redirect("/p");


});

app.listen(_portNumber,(req,res)=>{

console.log("You are connected to port",_portNumber);


});