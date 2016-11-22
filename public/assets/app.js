//Initialize variables
var zipCodeToSearch;

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
    // Making an ajax request to get the response.
    $.ajax({
      url: '/' + zipCodeToSearch,
      method: 'GET'
    }).done(function(response) {
      console.log(response);
      var yourRep = [];
      yourRep.push(response);
      $('.rep-name').html(response.name);
      $('.rep-party').html(response.party);
      $('.rep-districtNum').html('District Number: ' + response.districtNum);
      $('.rep-image').attr('src', '/images/'+response.image);
      $('.rep-phoneNum').html('Phone Number: ' + response.phoneNum);
      $('.rep-url').html(response.url);
    })
  }
});












