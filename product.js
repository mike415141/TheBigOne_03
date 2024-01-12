const  mongoose = require("mongoose");



mongoose.connect("mongodb+srv://mcompany4151:r06l3cPOI4FIKktV@cluster0.wj0zkmz.mongodb.net/db_new_test_001?retryWrites=true&w=majority")
.then(()=>{
console.log("Connected to mongoose ");

}).catch((error)=>{

console.log(error);

});


//////////////////////////////////////////////
const productSchema = new mongoose.Schema({
name:{

type:String,required:true,

}



});



const Product = mongoose.model("Product",productSchema);



module.exports = Product;

