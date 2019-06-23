$(() => {
	$('#add-resource').hide();

	$('#create-resource-btn').on('click', function() {
		$('#add-resource').slideToggle(400);
		$('.title-focus').focus();
	});
});

// //new-tweet section default set to hidden
// $('#add-resource').hide();
// //if #compose-tweet is clicked, button fades, icon dissapears and text is replaced
// $('#create-resource-btn').on('click', function() {
// 	// $("#compose-tweet .compose-tweet-btn").fadeTo("slow", 0.4);
// 	// $("#compose-tweet p").text("You're Humming!");
// 	// $(".fa-pen-nib").hide();
// 	//new-tweet section toggles on from hidden
// 	//text area is focused
// 	//body is scrolled to top
// 	$('#add-resource').toggle(400, function() {
// 		// $('textarea').focus();
// 		// $('body').scrollTop(0);
// 	});
// });
