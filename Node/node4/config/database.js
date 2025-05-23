const mongoose = require("mongoose")

require("dotenv").config();

const dbConnection = ()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(console.log("Database connected successfully."))
    .catch((error)=>{
        console.log(error);
        console.log("DB Connection Failed");
        process.exit(1);
    })
}

module.exports= dbConnection;