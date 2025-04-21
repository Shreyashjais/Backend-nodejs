const express= require('express');  //To instantiate the server
const app= express();  //To create an instance of express

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.listen(3000, ()=>{                             //Activate the server on the port 3000 and give a callback function(it will appear in terminal).
    console.log('Server started at Port 3000');
})

app.get('/',(req,res)=>{                           //when we will go on / route, we will see the response on the webpage.
    res.send("This is get method");
})

app.post('/api/cars', (req,res)=>{
    const {name,brand}=req.body;
    console.log(name);
    console.log(brand);
    res.send('Car details submitted successfully')
})

const mongoose= require('mongoose');
mongoose.connect('mongodb://localhost:27017/myDatabase',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> console.log("Connection Successful"))
.catch(()=>console.log("Received an error."))

