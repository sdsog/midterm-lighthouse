$(document).ready(function(e) {
  // Search for Resources
  $(".search").on("submit", function(event) {
    event.preventDefault();
    let data = $(this).serialize();
    $(this).val("");
    $.ajax({
      method: "GET",
      url: `/api/resources/search/?${data}`,
      success: function(output) {},
      error: function(err) {
        console.log("there was an error", err);
      }
    });
  });
});
