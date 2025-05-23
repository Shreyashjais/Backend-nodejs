const Todo= require("../models/Todo");

exports.updateTodo = async(req,res)=>{
    try{
        const {id}= req.params;
        const{title,description}= req.body;
        const updatedTodo=await Todo.findByIdAndUpdate({_id:id}, {title, description, updatedAt:Date.now()})
        res.status(200).json({
            success:true,
            data:updatedTodo,
            message:"Updated Successfully"
        })
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"Internal Server Error",
            message:err.message,
        })
      

    }
}