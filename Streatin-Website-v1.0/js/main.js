var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

var dummy_user_urls = [
  "https://randomuser.me/api/portraits/lego/0.jpg",
  "https://randomuser.me/api/portraits/lego/8.jpg",
  "https://randomuser.me/api/portraits/lego/3.jpg",
  "https://randomuser.me/api/portraits/lego/2.jpg",
  "https://randomuser.me/api/portraits/lego/5.jpg",
  "https://randomuser.me/api/portraits/lego/7.jpg",
  "https://randomuser.me/api/portraits/lego/1.jpg",
  "https://randomuser.me/api/portraits/lego/4.jpg",
  "https://randomuser.me/api/portraits/lego/6.jpg"];

var dummy_food_urls = [
  "http://www.listchallenges.com/f/items/b14fb7aa-e5b4-497d-98b0-da1857b009d9.jpg",
  "http://www.listchallenges.com/f/items/88884639-0b0b-4982-9a84-62ea54be5800.jpg",
  "http://www.listchallenges.com/f/items/df56e75a-a72d-4056-a05c-9546f8f67de9.jpg",
  "http://www.listchallenges.com/f/items/2f7aea2e-4506-4d5e-8ee6-79d3e3ff6adf.jpg",
  "http://www.listchallenges.com/f/items/5198f50a-53bd-4a76-9a35-25120c8915b7.jpg",
  "http://www.listchallenges.com/f/items/392e5f56-d7de-43e5-9c52-cf733bf1b50f.jpg",
  "http://profile.ak.fbcdn.net/hprofile-ak-prn1/50354_78900047583_888127_n.jpg",
  "http://www.listchallenges.com/f/items/1b85fd93-9c48-48f7-8ab6-9627ea8d033b.jpg",
  "http://www.listchallenges.com/f/items/4c5d7cfe-bb85-473b-8d0f-34ff725c5b8d.jpg",
  "http://www.listchallenges.com/f/items/32f3f53c-65a3-427c-a632-a13d3fdcf727.jpg",
  "http://www.listchallenges.com/f/items/4c0ff239-6ddc-4316-a840-52f04be238f9.jpg",
  "http://www.listchallenges.com/f/items/808b96f5-b027-4786-b628-4cd2b890fe2d.jpg",
  "http://www.listchallenges.com/f/items/9a5f1b45-a0a9-4b92-b875-a0070ebe0799.jpg",
  "http://www.listchallenges.com/f/items/eb62a7af-f447-486c-b9ef-32b4b2bcf00e.jpg",
  "http://www.listchallenges.com/f/items/607d737d-c5c1-46b7-9d7f-ac8d080df945.jpg",
  "http://www.listchallenges.com/f/items/d486f277-de8b-42d4-b017-6ee63bbe8a11.jpg",
  "http://www.listchallenges.com/f/items/dad821c0-fdce-4609-b97e-43afa9ce20b4.jpg",
  "http://www.listchallenges.com/f/items/c0d57a0e-c887-47f1-b4f9-bd9a26e26c57.jpg",
  "http://www.listchallenges.com/f/items/c0d57a0e-c887-47f1-b4f9-bd9a26e26c57.jpg",
  "http://www.listchallenges.com/f/items/4e785c75-bdd7-4989-bb04-ffa2cc9b5798.jpg"
];

var dummy_names = [
  "Loree Gambrel ", 
  "Ming Nuckles",
  "Noella Folger",  
  "Eliseo Marro " ,
  "Zora Marinelli" , 
  "Rubi Owen"  ,
  "Belva Passman",  
  "Britt Yager"  ,
  "Ivan Stickland",  
  "Jaquelyn Kemper",  
  "Brandon Pasek"  ,
  "August Pridgeon" , 
  "Nancey Yates " ,
  "Mignon Wedel"  ,
  "Erasmo Spadaro ", 
  "Kathlyn Cao"  ,
  "Venita Harr"  ,
  "Clay Billy ",
  "Anette Hastie",
  "Alejandrina Bunt",  
  "Nakita Wohlwend"  ,
  "Tierra Drain"  ,
  "Kera Rogan"  ,
  "Cuc Belford"  ,
  "Joycelyn Aybar",  
  "Trina Loveday"  ,
  "Aiko Ropp"  ,
  "Rea Yunker"  ,
  "Jeni Hardnett",  
  "Heidy Lafayette"
]

$.ajaxSetup({
  // Disable caching of AJAX responses
  // Used when debugging
  cache: false
});

window.onload = function() {
  var isOpen = (Math.floor(Math.random() * 1) == 0 ? false : true);

  for (var i = 0; i < 50; i++) {
    addFoodCard(dummy_food_urls[Math.floor(Math.random() * 19)]
       , dummy_names[Math.floor(Math.random() * 28)]
       , dummy_user_urls[Math.floor(Math.random() * 9)]
       , dummy_names[Math.floor(Math.random() * 28)]
       , Math.floor(Math.random() * 5)
       , Math.floor(Math.random() * 10000)
       , Math.floor(Math.random() * 5)
       , isOpen);
  }
};

function addFoodCard(food_url, food_name, chef_profile_url, chef_name, rating, reviews, overall, isOpen) {
  var status = "Closed";
  if (isOpen == true) {
    status = "Opened";
  }
  
  var inner_html = '<li><a class="card" href="#"><span class="card-header" style="' + food_url '"></span><span class="card-title"><div class="card-chef-name"><img src="' + chef_profile_url + '" alt="sq-sample12"/><h5>' + food_name + '</h5><span>' + chef_name + '</span><div class="card-status-div"><div class="circle"></div><p class="status">'+ status + '</p></div><div class="disc-rating"><div class="rating" data-rating="' + overall.toString() + '"><i class="star-1">★</i><i class="star-2">★</i><i class="star-3">★</i><i class="star-4">★</i><i class="star-5">★</i><p>(' + reviews.toString() + ' reviews)</p></div></div></div></span><span class="card-meta">Published: June 18th, 2015</span></a></li>';
  
  document.getElementById('horizontal-card-list').innerHTML += inner_html;
  
  console.log("get here!");
}

/* Get script for each toggable tabs
  in home page */
function addFullFoodCard(food_url, food_name, chef_profile_url, chef_name, rating, discription) {
  var html = '<a class="card" href="#"><span class="card-header" style="background-image:url(' + food_url + ');"></span><span class="card-title"><div class="card-chef-name"><img src="' + chef_profile_url + '" alt="sq-sample12"/><h5>' + food_name + '</h5><span>' + chef_name + '</span><div class="disc-rating"><div class="rating" data-rating="' + rating + '"><i class="star-1">★</i><i class="star-2">★</i><i class="star-3">★</i><i class="star-4">★</i><i class="star-5">★</i></div></div></div></span><span class="card-summary"><p>' + discription + '</p></span><span class="card-meta">Published: June 18th, 2015</span></a>';
  
  document.getElementById('home-disc-content').innerHTML += html;
}

$('#home-getstarted').click(function (event) {
  addFullFoodCard("https://wallpaperscraft.com/image/ice_cream_delicious_sweet_cherries_89624_1920x1080.jpg", "Ice Cream", "http://cdnmed.eluniversal.com//resources/jpg/1/6/1475945958261.jpg", "Tom Hanks", "4.5", "Ice cream (derived from earlier iced cream or cream ice) is a sweetened frozen food typically eaten as a snack or dessert. It is usually made from dairy products, such as milk and cream, and often combined with fruits or other ingredients");
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