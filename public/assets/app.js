//Initialize variables
var zipCodeToSearch;
var repToSearch;
var displayImages = [""];

function checkZipCode(zipCodeToSearch){
  if (zipCodeToSearch.length == 5) {
    if (parseInt(zipCodeToSearch) != NaN) {
      console.log("is a 5 digit number");
      return false;
    }
  } else {
    console.log("enter a valid zip code");
  }
}

$('#zipSubmit').on('click', function() {
  //obtain zip code
  zipCodeToSearch = parseInt($('#zipcode').val().trim());
  //Verify the zip code is a 5 digit numeric value before proceeding
  if (isNaN(zipCodeToSearch) == false && zipCodeToSearch > 0) {
    $.ajax({
      url: '/' + zipCodeToSearch,
      method: 'GET'
    }).done(function(response) {
      console.log(response);
      var yourRep = [];
      yourRep.push(response);
    })
  }
});












