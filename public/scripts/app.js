function createResource(resourceData) {
  console.log(resourceData);
  let $url = resourceData.url;
  let $id = resourceData.id;
  console.log($id);
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
  $(`<a href="/resource/${$id}" class='card-link'>More details</a>`).appendTo(
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
