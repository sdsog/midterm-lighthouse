$(() => {
  
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done(users => {
    for (user of users) {
      $("<div>")
        .text(user.username)
        .appendTo($("body"));
    }
  });

  $.ajax({
    method: "GET",
    url: "/api/resources"
  }).done(resources => {
    for (number of resources) {
      $("<div>")
        .text(number.title)
        .appendTo($("body"));
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
      console.log(resource, "1");
    }
  }

  //CREATE NEW RESOURCE FUNCTION

  function createResource(resourceData) {
    let $url = resourceData.url;
    console.log($url);
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

    console.log(resourceData.title);
    return newResource;
  }

  loadResources();
});
