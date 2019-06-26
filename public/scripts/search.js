$(document).ready(function(e) {
  $("#search-resources").hide();

  $(".search-btn").on("click", function() {
    $("#search-resources").slideToggle();
    $("body").scrollTop(0);
  });
  // Search for Resources
  $(".search").on("submit", function(event) {
    event.preventDefault();
    let data = $(this).serialize();
    $(this).val("");
    $.ajax({
      method: "GET",
      url: `/api/resources/search/?${data}`
    }).done(resources => {
      for (let i of resources) {
        for (let j of i) {
          const queryResource = searchResource(j);
          queryResource.appendTo($("#search-results-container"));
        }
      }
    });
  });

  function searchResource(resourceData) {
    let $url = resourceData.url;
    let $id = resourceData.id;

    let newResource = $("<div class='card'>");
    $(`<img class="card-img">`)
      .attr("src", resourceData.favicon)
      .prependTo(newResource);

    let $cardBody = $("<span class='card-body'>").appendTo(newResource);
    $("<h5 class='card-title'>")
      .text(resourceData.title)
      .appendTo($cardBody);
    $("<p class='card-text'>")
      .text(resourceData.description)
      .appendTo($cardBody);
    var $footer = $("<div class='card-footer'>").appendTo(newResource);
    $(
      `<a href="${$url}" class='visit-site' target="_blank">Visit Site</a>`
    ).appendTo($footer);
    $(
      `<a href="/resource/${$id}" class='more-details'>More details</a>`
    ).appendTo($footer);
    return newResource;
  }
});
