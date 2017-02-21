/*jslint browser: true*/
/*global $, jQuery*/

var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

$.ajaxSetup({
  // Disable caching of AJAX responses
  // Used when debugging
  cache: false
});

/*
  Get script for each toggable tabs
  in home page
*/
function addFoodCard(food_url, food_name, chef_profile_url, chef_name, rating, discription) {
  var html = '<a class="card" href="#"><span class="card-header" style="background-image:url(' + food_url + ');"></span><span class="card-title"><div class="card-chef-name"><img src="' + chef_profile_url + '" alt="sq-sample12"/><h5>' + food_name + '</h5><span>' + chef_name + '</span><div class="disc-rating"><div class="rating" data-rating="' + rating + '"><i class="star-1">★</i><i class="star-2">★</i><i class="star-3">★</i><i class="star-4">★</i><i class="star-5">★</i></div></div></div></span><span class="card-summary"><p>' + discription + '</p></span><span class="card-meta">Published: June 18th, 2015</span></a>';
  
  document.getElementById('home-disc-content').innerHTML += html;
}

$('#home-getstarted').click(function (event) {
  addFoodCard("https://wallpaperscraft.com/image/ice_cream_delicious_sweet_cherries_89624_1920x1080.jpg", "Ice Cream", "http://cdnmed.eluniversal.com//resources/jpg/1/6/1475945958261.jpg", "Tom Hanks", "4.5", "Ice cream (derived from earlier iced cream or cream ice) is a sweetened frozen food typically eaten as a snack or dessert. It is usually made from dairy products, such as milk and cream, and often combined with fruits or other ingredients");
});

$(document).ready(function () {
  var mySwiper = new Swiper('.slide-div', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    keyboardControl: true,
    a11y: true,
    loop: true,
    coverflow: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows : false
    }
  })        
});

function truncateText(selector, maxLength) {
  var element = document.querySelector(selector),
      truncated = element.innerText;

  if (truncated.length > maxLength) {
      truncated = truncated.substr(0, maxLength) + '...';
  }
  return truncated;
}

document.querySelector('p').innerText = truncateText('p', 150);