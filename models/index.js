var mongoose=require("mongoose");
mongoose.set('debug',true);
mongoose.connect("mongodb://localhost/Todo");

mongoose.Promise=Promise;
module.exports.Todo=require("./todo");