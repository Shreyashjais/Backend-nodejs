const express = require("express");
const app = express();

require("dotenv").config();
const PORT= process.env.PORT || 4000;

app.use(express.json());

const blog = require("./routes/blog")
app.use("/blog", blog)

const dbConnection= require("./config/database");
dbConnection();

app.listen(PORT, ()=>{
    console.log(`App started on ${PORT}`)
})

app.get("/" ,(req,res)=>{
    res.send("This is default route.")

})