const mongoose = require("mongoose");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

const Project = require("./models/Project");

const projects = require("./data/projects");

dotenv.config();

connectDB();

const importData = async () => {

try{

await Project.deleteMany();

await Project.insertMany(projects);

console.log("Data Imported");

process.exit();

}
catch(error){

console.log(error);

process.exit(1);

}

};

importData();