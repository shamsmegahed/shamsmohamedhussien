const express = require('express');
const mongoose = require('mongoose');

let app = express();


mongoose.connect("mongodb://127.0.0.1:27017/users")
.then(
    () => console.log("DB is connected"),
    err => {console.log("Not connected")}
);
 
const studentSchema = new mongoose.Schema({
     name : String,
    age : Number,
    phone : String, 
    Password : String,
    address : String
});

const student = new mongoose.model("users", studentSchema);


const courseSchema = new mongoose.Schema({
    courseName : String,
    Description : String,
    duration : String,
    cost : Number
})

const course = new mongoose.model("course",courseSchema );


let student1 = new student ({
    name : "Shams",
    age : 20,
    phone : "01003254202",
    Password : "shamsM123",
    address : "32st"
}).save();

let student2 = new student ({
    name : "Mohamed",
    age : 23,
    phone : "01298532146",
    Password : "mohamedH568",
    address : "52st"
}).save();


let course1 = new course ({
    courseName : "Java script",
    Description : "Course for bigenners",
    duration : "2 months",
    cost : 400 
}).save();


let course2 = new course ({
    courseName : "C++",
    Description : "Course for bigenners",
    duration : "3 months",
    cost : 600
}).save();




app.listen(3020,()=>{
    console.log('server now is opened')
})

