$(document).ready(function(e) {
  // getComments();

  // POST Ranking
  $(".rating-form").on("submit", ".rate", function() {
    event.preventDefault();
    let data = $(".rate input").serialize();
    $(".rate input").val("");
    $.ajax({
      method: "POST",
      url: "/engagements",
      data: data,
      dataType: "text",
      success: function(result) {
        console.log(result);
      },
      error: function(err) {
        console.log("there was an error", err);
      }
    });
  });

  // POST COMMENT
  $(".comment-form").on("submit", ".comment", function() {
    event.preventDefault();
    let data = $(".comment input").serialize();
    $(".comment input").val("");
    $.ajax({
      method: "POST",
      url: "/engagements",
      data: data,
      dataType: "text",
      success: function(result) {
        console.log(result);
      },
      error: function(err) {
        console.log("there was an error", err);
      }
    });
  });
});

// function getComments() {
//   //get the Resource id from the DOM
//   let resourceId = $("#resourceid").attr("val");
//   $.ajax({
//     method: "GET",
//     url: "/api/resources/test/" + resourceId,
//     dataType: "json",
//     success: function(result) {
//       console.log("length =", result.length);
//       for (let i = 0; i < result.length; i++) {
//         $("#comments").text(result[i].comment);
//       }
//     },
//     error: function(err) {
//       console.log("there was an error", err);
//     }
//   });
// }
