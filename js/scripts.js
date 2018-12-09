// @codekit-prepend 'scroll-fadeout.js'
// @codekit-prepend 'jquery.smooth-scroll.js'

$(function(){

  var selectedCategory = categoryAll;
  var i=0;

  $('#navCategories li').on('click', function() {

    if ( $(this).hasClass('selected') ){
      return 0; // currently selected artist has been clicked so do nothing
    }else{
      //updates navigation
      $('#navCategories li.selected').removeClass('selected');
      $(this).addClass('selected');

      //filters items
      selectedCategory= $(this).attr('id');

      if( selectedCategory == 'categoryAll' ){
        $('.project-list__item').fadeIn();
      }else{
        $('.project-list__item').not('.'+selectedCategory).hide();
        $('.project-list__item.'+selectedCategory).fadeIn();
      }

    } // /else

  });

  $('.scroll-to-anchor').smoothScroll({
     offset: -44
  });

});
