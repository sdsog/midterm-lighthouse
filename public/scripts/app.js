function createResource(resourceData) {
	console.log(resourceData);
	let $url = resourceData.url;
	let $id = resourceData.id;
	console.log($id);
	let newResource = $("<div class='card'>");
	$(`<img class="card-img">`)
		.attr('src', resourceData.favicon)
		.appendTo(newResource);

	let $cardBody = $("<span class='card-body'>").appendTo(newResource);
	$("<h5 class='card-title'>")
		.text(resourceData.title)
		.appendTo($cardBody);
	$("<p class='card-text'>")
		.text(resourceData.description)
		.appendTo($cardBody);
	var $footer = $("<div class='card-footer'>").appendTo(newResource);
	$(`<a href="${$url}" class='visit-site'>Visit Site</a>`).appendTo($footer);
	$(`<a href="/resource/${$id}" class='more-details'>More details</a>`).appendTo($footer);
	return newResource;
}

function getResources(isMine) {
	let url = isMine ? '/api/resources/mine' : '/api/resources';
	let id = isMine ? '#my-resources-container' : '#resources-container';
	$.ajax({
		method: 'GET',
		url: url,
	}).done(resources => {
		console.log(resources);
		for (resource of resources) {
			const currentResource = createResource(resource);
			currentResource.appendTo($(id));
		}
	});
}

$(() => {
	getResources(false);
	getResources(true);
});
