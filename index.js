const mongoose = require("mongoose");
const express = require("express");

app = express();
port = 3000;
app.listen(port, () => { `server is running on ${port}` });

// Connection With MongoDB

mongoose.connect("mongodb://localhost:27017/Node").then(() => {
    console.log("connected successfully");
}).catch((error) =>
    console.log(error));

// Connected Successfully

// Create Schema
EmpSchema =  mongoose.Schema({
    name: { 
        type: String,
        required: true
     },
    mobile: { 
        type: Number, 
        required: true 
    },
    age: { 
        type: Number,
        required: true 
    },
    salary: {
        type: Number,
        required: true
    },
    married:{
        type:Boolean,
        required:true
    },
    date:{
        type:Date,
        default: Date.now()
    }
});

employee= new mongoose.model('emp', EmpSchema);
// Schema Created

// INSERT DATA

// Insert Single  Data

// createEmp = new employee(
//     {
//         name:"Sakshi Chaurasia",
//         mobile:9876543210,
//         age:20,
//         salary:20000,
//         married:false
//     });

// createEmp.save();
// console.log(`Data inserted : ${createEmp}`);

// Insert Using Async Method
// createEmp = async()=>{
//     try{
//         createE = new employee({
//             name:"John Doe",
//             mobile:9876543210,
//             age:28,
//             salary:10000,
//             married:true
//         });
//        empD = await createE.save();

//     }catch (error){
// console.log(error);
//     }
//     console.error("Employee created");
// }

// createEmp();


// Insert Multiple Entries

// CreateEmp = async()=>{

// try{
// createE1 = new employee(
//     {
//     name:"Sak",
//     mobile:9876543233,
//     age:18,
//     salary:50000,
//     married:true
// }

// )
// createE2 = new employee(
//     {
//     name:"Sam",
//     mobile:9876543288,
//     age:18,
//     salary:50000,
//     married:true
// }

// )
// createE3 = new employee(
//     {
//     name:"Sak",
//     mobile:9876543277,
//     age:18,
//     salary:80000,
//     married:false
// }

// )
// createE4 = new employee(
//     {
//     name:"Dam",
//     mobile:9876547810,
//     age:38,
//     salary:50000,
//     married:true
// }

// )
// createE5 = new employee(
//     {
//     name:"Tina",
//     mobile:9876543288,
//     age:32,
//     salary:50000,
//     married:true
// })
// empD = await employee.insertMany([createE1,createE2,createE3,createE4,createE5]);

// }catch (error){
//     console.log(error);
//         }
//         console.error("Employee created");
// }
//  CreateEmp();


// Find Data

// readData = async()=>{
//     try{
//         // data = await employee.find({ married : true}).select({ mobile : 0}).limit(6).sort({salary:-1});
//         //console.log(data);
//         // data = await employee.find({ $and: [{salary :{$lte:50000}},{age:{$gte:30}}]});
//         // console.log(data);
//         data = await employee.find().countDocuments();
//         // data = await employee.find({ married:{$not :{$eq:true}}});
//         console.log(data);
//     }
//     catch(error){
//         console.error(error);
//     }
// }
// readData();


// // Update Data

// updateData = async(id) =>{
//     try{
//         data = await employee.updateOne({_id:id},
//             {
//                 $set : {name:"CAT"}
//             })   
//             console.log("UPDATED")   
//     }
//     catch (error) {
//         console.error(error)
//     }
// }
// updateData(50000);


// updateData = async(salary) =>{
//     try{
//         data = await employee.updateMany({salary:salary},
//             {
//                 $set : {salary:20}
//             })   
//             console.log("UPDATED",data)   
//     }
//     catch (error) {
//         console.error(error)
//     }
// }
// updateData(50000);

// Delete Data
// deleteData = async(id) =>{
//     try{
//         data = await employee.deleteMany({_id:id})   
//             console.log("Deleted",data)   
//     }
//     catch (error) {
//         console.error(error)
//     }
// }
// deleteData('65ba0d42e50388a34d2f15c1');