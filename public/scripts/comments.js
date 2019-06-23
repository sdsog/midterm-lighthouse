function getComments() {
	//get the Resource id from the DOM
	let resourceId = $('#resourceid').attr('val');
	$.ajax({
		method: 'GET',
		url: `/api/resources/${resourceId}/comments/`,
		dataType: 'json',
		success: function(result) {
			console.log('length =', result.length);

			for (let i = 0; i < result.length; i++) {
				$('#comments').text(result.map(r => r.comment).join('\n'));
			}
		},
		error: function(err) {
			console.log('there was an error', err);
		},
	});
}

$(document).ready(function(e) {
	getComments();
	// POST Ranking
	$('.rating-form').on('submit', '.rate', function() {
		event.preventDefault();
		let data = $('.rate input').serialize();
		$('.rate input').val('');
		$.ajax({
			method: 'POST',
			url: '/api/engagements/rating',
			data: data,
			dataType: 'text',
			success: function(result) {},
			error: function(err) {
				console.log('there was an error', err);
			},
		});
	});

	// POST COMMENT
	$('.comment').on('submit', function(event) {
		event.preventDefault();
		let data = $(this).serialize();

		$(this).val('');
		$.ajax({
			method: 'POST',
			url: '/api/engagements/comment',
			data: data,
			dataType: 'text',
			success: function(result) {
				// console.log(result);
			},
			error: function(err) {
				console.log('there was an error', err);
			},
		});
	});
});
