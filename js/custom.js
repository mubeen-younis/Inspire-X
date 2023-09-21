
const inputElement = document.getElementById('form-input');

inputElement.addEventListener('input', function() {
  const inputValue = inputElement.value;

  if (inputValue.length > 20) {
    inputElement.style.color = 'red'; 
  } else {
    inputElement.style.color = 'white'; 
  }
});



const inputText = document.getElementById('form-text');

inputText.addEventListener('input', function() {
  const inputValue = inputText.value;

  if (inputValue.length > 200) {
    inputText.style.color = 'red'; 
  } else {
    inputText.style.color = 'white'; 
  }
});





// ---------------------------------------

function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


$('.custom_slick_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    fade: true,
    adaptiveHeight: true,
    asNavFor: '.slick_slider_nav',
    responsive: [{
        breakpoint: 768,
        settings: {
            dots: false
        }
    }]
})

$('.slick_slider_nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.custom_slick_slider',
    centerMode: false,
    focusOnSelect: true,
    variableWidth: true
});


/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}