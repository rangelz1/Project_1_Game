$(document).ready(function() {
  
$(function() {

  $('#addHome').removeClass('btn-danger').addClass('btn-success');

  var $newLink = $( '<br><br><a id="zillowLink" href="http://www.zillow.com">Visit Zillow.com<a>' );
  $('body').append($newLink);
  $('#zilliowLink').attr('target', '_blank');

});

  $('#homes').on('click', 'button', function() {
    $(this).closest('tr').fadeOut(1000, function() {
      // now that the tr is hidden, let's completely remove it from the DOM
      $(this).remove();
    });
  });

  var newHomes = [
  {address: "27569 Cedarwood Drive", sf: "2,535", bedrooms: 3, baths: 2.5, price: "$496,500"},
  {address: "316 Annandale Drive", sf: "1,326", bedrooms: 4, baths: 2, price: "$275,000"},
  {address: "251 Grandview Road", sf: "3,800", bedrooms: 3, baths: 2, price: "$699,900"},
  {address: "28571 Manitoba", sf: "2,960", bedrooms: 4, baths: 3.5, price: "$775,000"}
];

$('#addHome').on('click', 'button', function() {
     $('tr').append($newHomes); 
  });



});

// or, the shortcut version


