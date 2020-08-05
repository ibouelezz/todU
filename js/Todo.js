// removing & fading out
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
})

$("input[type='text']").on("keydown", function(event) {
	if(event.which === 13) {
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todoText + "<input type='checkbox'></li>")
	}
});

$("ul").on("click", "li", function() {
	$(this).toggleClass("selected");
	var checkbox = $(this).find(':checkbox');
    checkbox.attr('checked', !checkbox.attr('checked'));
})

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle()
});	