const mongoose= require('mongoose');
const url ="mongodb://localhost:27017"

const connectDb=async()=>{

    const conn=await mongoose.connect(url);

}

module.exports=connectDb;  // to export this file so that it can be used by other js files.