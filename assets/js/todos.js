// Check Off To-Dos By Clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// Delete a To-Do
$("ul").on("click", "span",function(event){
	$(this).parent().fadeOut(function(){
		$(this).remove();
		});
	event.stopPropagation();
});

// Adding New Tod-Do
$("input[type='text']").keypress(function(event){
	if(event.which == 13){

		var todoText = $(this).val();
		
		//Creates New li
		if(todoText != ""){
			$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span>" + todoText + "</li>");
		}			
		//Makes TextBox Blank
		$(this).val("");
	}
});

// Hide and Show TextBox
$(".fa-pencil").click(function(){
	$("input[type='text']").slideToggle();
})