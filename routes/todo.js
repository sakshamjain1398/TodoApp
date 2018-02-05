var express=require("express"),
	router=express.Router(),
	Todo=require("../models").Todo;
router.get("/",function (req,res) {
	Todo.find()
	.then(function (data) {
		res.json(data);
	})
	.catch(function (data) {
		console.log(err);
	})
});
router.post("/",function (req,res) {
	Todo.create(req.body)
	.then(function (data){
		res.status(201).json(data);
	})
	.catch(function (err) {
		console.log(err);
	})
});
router.get("/:todoId",function (req,res) {
	Todo.findById(req.params.todoId)
	.then(function (data) {
		res.json(data);
	})
	.catch(function (data) {
		console.log(err);
	})
})
router.put("/:todoId",function (req,res) {
	Todo.findByIdAndUpdate(req.params.todoId,req.body)
	.then(function (data) {
		res.status(201).json(data);
	})
	.catch(function (err) {
		console.log(err);
	})
});
router.delete("/:todoId",function (req,res) {
	Todo.findByIdAndRemove(req.params.todoId)
	.then(function (data) {
		res.status(201).json({message: 'We deleted it!'});
	})
	.catch(function (err) {
		console.log(err);
	})
});
module.exports=router;