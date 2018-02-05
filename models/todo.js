var mongoose=require("mongoose");

var todoSchema=mongoose.Schema({
	name:{
		type:String,
		required:"Name is required"
	},
	completed:{
		type:Boolean,
		default:false
	},
	created_date:{
		type:Date,
		default:Date.now
	}
})

module.exports=mongoose.model('Todo',todoSchema);