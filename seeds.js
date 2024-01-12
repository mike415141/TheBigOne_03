const  mongoose = require("mongoose");
const Product = require("./models/product");

mongoose.connect("mongodb+srv://mcompany4151:r06l3cPOI4FIKktV@cluster0.wj0zkmz.mongodb.net/db_new_test_004?retryWrites=true&w=majority")
.then(()=>{
console.log("Connected to mongoose ");

}).catch((error)=>{

console.log(error);

});


const TheProduct = [

{
   name: "tim"

},
{
name: "kim"


}


]


Product.insertMany(TheProduct)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })