$(() => {
  $.ajax({
    method: "GET",
    url: "/api/resources",
  }).done(resources => {
    for (resource of resources) {
      const currentResource = createResource(resource);
      currentResource.appendTo($("#resources-container"));
    }
  });

  // LOAD AND RENDER RESOURCES
  function loadResources() {
    $.getJSON("/api/resources").done(function(resources) {
      renderResource(resources);
    });
  }

  function renderResource(resources) {
    for (let resource of resources) {
      $(".card").prepend(createResource(resource));
    }
  }

  //CREATE NEW RESOURCE FUNCTION

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

  // loadResources();
});
