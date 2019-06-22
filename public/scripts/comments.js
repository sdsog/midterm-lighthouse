$(document).ready(function (e) {
  getComments();

});

function getComments() {
  //get the Resource id from the DOM
  let resourceId = $('#resourceid').attr("val");
  $.ajax({
    method: 'GET',
    url: "/api/resources/test/"+resourceId,
    dataType: "json",
    success: function (result) {
      console.log('length =', result.length);
      for (let i = 0; i < result.length; i++) {
         $('#comments').text(result[i].comment);
        
      }
    },
    error: function (err) {
      console.log("there was an error", err);
    }
  });
}



