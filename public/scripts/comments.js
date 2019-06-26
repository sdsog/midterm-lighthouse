function getComments() {
  //get the Resource id from the DOM
  let resourceId = $("#resourceid").attr("val");

  let id = "#comment-box";
  $.ajax({
    method: "GET",
    url: `/api/resources/${resourceId}/comments/`
  }).done(comments => {
    $("#comment-box").empty();
    for (comment of comments) {
      const currentComment = createComment(comment);
      currentComment.prependTo($("#comment-box"));
    }
  });
}

function createComment(comment) {
  console.log("comments = " + comment.comment);
  const username = comment.user_id;

  const newComment = $("<div class='comments'>");
  $("<p class='comments-username'>")
    .text(
      `posted by user ${username} on 20${username}9/0${username}/${username}3 `
    )
    .appendTo(newComment);
  $("<p class='comments-body'>")
    .text(comment.comment)
    .appendTo(newComment);

  console.log("what is being returned", newComment);

  return newComment;
  // console.log('RESULTS ', $commentBody);
  // $('#comments').text(result.map(r => r.comment).join('\n'));
}

$(document).ready(function(e) {
  getComments();
  // POST Ranking
  $(".rating-form").on("submit", ".rate", function() {
    event.preventDefault();
    let data = $(".rate input").serialize();
    $(".rate input").val("");
    $.ajax({
      method: "POST",
      url: "/api/engagements/rating",
      data: data,
      dataType: "text",
	  success: function(result) {},
      error: function(err) {
        console.log("there was an error", err);
      }
    });
  });

  // POST COMMENT
  $(".comment").on("submit", function(event) {
    event.preventDefault();
    let data = $(this).serialize();

    $(this).val("");
    $.ajax({
      method: "POST",
      url: "/api/engagements/comment",
      data: data,
      dataType: "text",
      success: function(result) {
        getComments();
        // console.log(result);
      },
      error: function(err) {
        console.log("there was an error", err);
      }
    });
  });
});
