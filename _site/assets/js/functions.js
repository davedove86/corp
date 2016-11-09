$( document ).ready(function() {

  $('.menu-plate').on('click', function(e){
    e.stopPropagation();
  });

  $('.menu-close, .menu-svg, .menu-overlay').on('click', function(){
    $('html').toggleClass('menu-open');
  });


});
