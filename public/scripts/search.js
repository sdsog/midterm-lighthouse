$(document).ready(function(e) {
  console.log("loading");
  // Search for Resources
  $(".search-bar").on("submit", function(event) {
    console.log("default");
    event.preventDefault();
    let data = $(this).serialize();
    $(this).val("");
    console.log(data);
    $.ajax({
      method: "GET",
      url: `/api/resources/search/?${data}`,
      success: function(output) {
        console.log(output);
      },
      error: function(err) {
        console.log("there was an error", err);
      }
    });
  });
});
