function createResource(resourceData) {
  let $url = resourceData.url;
  let newResource = $("<div class='card'>");
  $(`<img class="card-img">`)
    .attr("src", resourceData.favicon)
    .appendTo(newResource);
  $("<h5 class='card-title'>")
    .text(resourceData.title)
    .appendTo(newResource);
  $("<p class='card-text'>")
    .text(resourceData.description)
    .appendTo(newResource);
  $(`<a href="${$url}" class='card-link'>Visit</a>`).appendTo(newResource);
  $(`<a href="#popup1" class='card-link'>More details</a>`).appendTo(
    newResource
  );
  return newResource;
}

function getResources (isMine){
  let url = isMine ? "/api/resources/mine"
                   : "/api/resources";
  let id = isMine ? "#my-resources-container"
                  : "#resources-container"
  $.ajax({
    method: "GET",
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
