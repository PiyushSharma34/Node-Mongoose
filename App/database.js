
mongoose = require("mongoose")
// mongodb://localhost:27017
mongoose.connect("mongodb+srv://sakshi:Express1224@student.ljooxlq.mongodb.net/?retryWrites=true&w=majority").then(() => {
    console.log("connected successfully");
}).catch((error) =>
    console.log(error));


Schema = mongoose.Schema({
    name: String,
    mail:String,
    age:Number
})

StudentModel = mongoose.model("Student",Schema)
// console.log("Model Created")

module.exports=StudentModel