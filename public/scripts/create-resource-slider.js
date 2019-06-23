$(() => {
	$('#add-resource').hide();

	$('#create-resource-btn').on('click', function() {
		$('#add-resource').slideToggle(400);
		$('.title-focus').focus();
	});
});
