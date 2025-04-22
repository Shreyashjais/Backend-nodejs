const express = require('express');
const router = express.Router();

//Import controller
const {createTodo} = require('../controllers/createTodo');
const {getTodos, getSingleTodo} = require('../controllers/getTodos');
const {updateTodo} = require('../controllers/updateTodo')
const {deleteTodo} = require('../controllers/deleteTodo')

//define API Routes
router.post("/createTodo", createTodo);
router.get("/getTodos", getTodos)
router.get("/getSingleTodo/:id", getSingleTodo)
router.put("/updateTodo/:id", updateTodo)
router.delete("/deleteTodo/:id",deleteTodo)



module.exports = router;