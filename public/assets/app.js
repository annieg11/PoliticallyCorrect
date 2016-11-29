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
      $('.repName').html('<h3>' + response.name + '</h3>');
      $('.repImage').attr('src', '/images/'+response.image);
      $('.party').html('Party: ' + response.party);
      $('.districtNum').html('District Number: ' + response.districtNum);
      $('.phoneNum').html('<i class="fa fa-phone-square" aria-hidden="true"></i>' + '  Phone Number: ' + response.phoneNum);
      $('.website').attr('href', response.url).html('<i class="fa fa-info" aria-hidden="true"></i>     Website');
       console.log(response.url);
    })
  }
});












