const Todo= require("../models/Todo");


exports.getTodos = async(req,res) => {
    try{
        const todos=  await Todo.find({})
        res.status(200).json(
            {
                success: true,
                data:todos,
                message: 'Todos found successfully.'
            }
        )
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


exports.getSingleTodo = async (req, res) => {
    try {
      const id = req.params.id;
      const singleTodo = await Todo.findById({_id:id});
  
      if (!singleTodo) {
        return res.status(404).json({
          success: false,
          message: "No data found with the given ID",
        });
      }
  
      res.status(200).json({
        success: true,
        data: singleTodo,
        message: "Single Todo found successfully.",
      });
  
    } catch (err) {
      console.error(err);
      res.status(500).json({
        success: false,
        data: "Internal Server Error",
        message: err.message,
      });
    }
  };
  