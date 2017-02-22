jQuery(function($) {
  'use strict';
  var currentItem = 0;

  // -------------------------------------------------------------
  //   Basic Navigation
  // -------------------------------------------------------------
  (function() {
    var $frame = $('#basic');
    var $slidee = $frame.children('ul').eq(0);
    var $wrap = $frame.parent();

    // Call Sly on frame
    $frame.sly({
      horizontal: 1,
      itemNav: 'basic',
      smart: 1,
      activateOn: 'click',
      mouseDragging: 1,
      touchDragging: 1,
      releaseSwing: 1,
      startAt: 0,
      scrollBar: $wrap.find('.horizontal-scrollbar'),
      scrollBy: 1,
      activatePageOn: 'click',
      speed: 300,
      elasticBounds: 1,
      easing: 'easeOutExpo',
      dragHandle: 1,
      dynamicHandle: 1,
      clickBar: 1,

      // Buttons
      prevPage: $wrap.find('.swiper-button-prev'),
      nextPage: $wrap.find('.swiper-button-next')
    });
    
    $wrap.find('.swiper-button-next').on('click', function() {
      currentItem += 3;
      if (currentItem >= $slidee.children().length - 10) {
        for (i = 0; i < 20; i++) { 
            $frame.sly('add', '<li>' + $slidee.children().length + '</li>');
        }
      }
    });
  
    // Add item
    $wrap.find('.add').on('click', function() {
      $frame.sly.add('<li>' + $slidee.children().length + '</li>', $slidee.children().length -1);
    });
  }());

  // -------------------------------------------------------------
  //   Centered Navigation
  // -------------------------------------------------------------
  (function() {
    var $frame = $('#centered');
    var $wrap = $frame.parent();

    // Call Sly on frame
    $frame.sly({
      horizontal: 1,
      itemNav: 'centered',
      smart: 1,
      activateOn: 'click',
      mouseDragging: 1,
      touchDragging: 1,
      releaseSwing: 1,
      startAt: 0,
      scrollBar: $wrap.find('.horizontal-scrollbar'),
      scrollBy: 1,
      speed: 300,
      elasticBounds: 1,
      easing: 'easeOutExpo',
      dragHandle: 1,
      dynamicHandle: 1,
      clickBar: 1,

      // Buttons
      prev: $wrap.find('.swiper-button-prev'),
      next: $wrap.find('.swiper-button-next')
    });
  }());

  // -------------------------------------------------------------
  //   Force Centered Navigation
  // -------------------------------------------------------------
  (function() {
    var $frame = $('#forcecentered');
    var $wrap = $frame.parent();

    // Call Sly on frame
    $frame.sly({
      horizontal: 1,
      itemNav: 'forceCentered',
      smart: 1,
      activateMiddle: 1,
      activateOn: 'click',
      mouseDragging: 1,
      touchDragging: 1,
      releaseSwing: 1,
      startAt: 0,
      scrollBar: $wrap.find('.horizontal-scrollbar'),
      scrollBy: 1,
      speed: 300,
      elasticBounds: 1,
      easing: 'easeOutExpo',
      dragHandle: 1,
      dynamicHandle: 1,
      clickBar: 1,

      // Buttons
      prevPage: $wrap.find('.swiper-button-prev'),
      nextPage: $wrap.find('.swiper-button-next')
    });
  }());

  // -------------------------------------------------------------
  //   Cycle By Items
  // -------------------------------------------------------------
  (function() {
    var $frame = $('#cycleitems');
    var $wrap = $frame.parent();

    // Call Sly on frame
    $frame.sly({
      horizontal: 1,
      itemNav: 'basic',
      smart: 1,
      activateOn: 'click',
      mouseDragging: 1,
      touchDragging: 1,
      releaseSwing: 1,
      startAt: 0,
      scrollBar: $wrap.find('.horizontal-scrollbar'),
      scrollBy: 1,
      speed: 300,
      elasticBounds: 1,
      easing: 'easeOutExpo',
      dragHandle: 1,
      dynamicHandle: 1,
      clickBar: 1,

      // Cycling
      cycleBy: 'items',
      cycleInterval: 1000,
      pauseOnHover: 1,

      // Buttons
      prev: $wrap.find('.swiper-button-prev'),
      next: $wrap.find('.swiper-button-next')
    });
  }());

  // -------------------------------------------------------------
  //   Cycle By Pages
  // -------------------------------------------------------------
  (function() {
    var $frame = $('#cyclepages');
    var $wrap = $frame.parent();

    // Call Sly on frame
    $frame.sly({
      horizontal: 1,
      itemNav: 'basic',
      smart: 1,
      activateOn: 'click',
      mouseDragging: 1,
      touchDragging: 1,
      releaseSwing: 1,
      startAt: 0,
      scrollBar: $wrap.find('.horizontal-scrollbar'),
      scrollBy: 1,
      pagesBar: $wrap.find('.pages'),
      activatePageOn: 'click',
      speed: 300,
      elasticBounds: 1,
      easing: 'easeOutExpo',
      dragHandle: 1,
      dynamicHandle: 1,
      clickBar: 1,

      // Cycling
      cycleBy: 'pages',
      cycleInterval: 1000,
      pauseOnHover: 1,
      startPaused: 1,

      // Buttons
      prevPage: $wrap.find('.swiper-button-prev'),
      nextPage: $wrap.find('.wiper-button-next')
    });
  }());

  // -------------------------------------------------------------
  //   One Item Per Frame
  // -------------------------------------------------------------
  (function() {
    var $frame = $('#oneperframe');
    var $wrap = $frame.parent();

    // Call Sly on frame
    $frame.sly({
      horizontal: 1,
      itemNav: 'forceCentered',
      smart: 1,
      activateMiddle: 1,
      mouseDragging: 1,
      touchDragging: 1,
      releaseSwing: 1,
      startAt: 0,
      scrollBar: $wrap.find('.horizontal-scrollbar'),
      scrollBy: 1,
      speed: 300,
      elasticBounds: 1,
      easing: 'easeOutExpo',
      dragHandle: 1,
      dynamicHandle: 1,
      clickBar: 1,

      // Buttons
      prevPage: $wrap.find('.swiper-button-prev'),
      nextPage: $wrap.find('.swiper-button-next')
    });
  }());
});