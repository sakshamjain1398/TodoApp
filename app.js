var express=require("express"),
	app=express(),
	mongoose=require("mongoose"),
	TodoRoutes=require("./routes/todo"),
	BodyParser=require("body-parser"),
	Todo=require("./models");

app.set("view engine","ejs");
app.use(express.static(__dirname+"/public"));
app.use(express.static(__dirname+"/views"));
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended:true}));

app.get("/",function (req,res) {
	res.render("index");
})

app.use("/api",TodoRoutes);

app.listen(3000);