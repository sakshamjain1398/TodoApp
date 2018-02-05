 $(document).ready(function () {
  	$.getJSON("/api/")
	.done(function (data) {
		if(data!=undefined){
		data.forEach( function(li, index) {
			addTodo(li);
		});
	}
	})
	.fail(function (err) {
		console.log(err);
	})
	function addTodo(li) {
		var newTodo=$("<li class=\"task\">"+li.name+"<span>X</span></li>");
		newTodo.data('id',li._id);
		newTodo.data('completed',li.completed);
			$(".list").append(newTodo);
		if(li.completed)
		{
			newTodo.addClass("done");
		}
	}
	$("#todoInput").keypress(function (event) {
		if(event.which==13){
			var usrInput=$("#todoInput")["0"].value;
			$.ajax({
			    type: "POST", 
			    url: '/api',
			    data: {name: usrInput},
			    dataType: "json"
			}).done(function(newTodo) {
				console.log("asdasd");
			    $('#todoInput').val('');
			    addTodo(newTodo);
			}).fail(function(err) {
			    console.log(err);
			});
		}
	})

	$('.list').on('click','span',function (event) {
		event.stopPropagation();
		$.ajax({
			    type: "DELETE", 
			    url:'/api/'+$(this).parent().data('id'),
			}).then(function() {
				
			}).fail(function(err) {
			    console.log(err);
			});
		$(this).parent().remove(); 
	})
	$('.list').on('click','li',function (event) {
		var p=$(this).data('completed');
		var updatedData={completed:!p};
		$.ajax({
			type:"PUT",
			url:'/api/'+$(this).data('id'),
			data:updatedData
		}).then(function (data) {
			$(this).data('completed')=!p;
		}).catch(function (err) {
			console.log(err);
		})
		$(this).toggleClass("done");
	})
	  })