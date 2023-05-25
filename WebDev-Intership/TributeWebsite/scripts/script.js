$(document).ready(function() {
    $(window).scroll(function() {
      var scrollPos = $(this).scrollTop();
      var quoteSectionOffset = $('.quote').offset().top;
      var normalSectionOffset = $('.normal-section').offset().top;
      
      if (scrollPos >= quoteSectionOffset) {
        $('.hero-title').css('opacity', '0');
        $('.quote-text').css('opacity', '1');
        $('.quote').css('background-color', 'transparent');
        
      } else {
        $('.hero-title').css('opacity', '1');
        $('.quote-text').css('opacity', '0');
        $('.quote').css('background-color', '#220033');
      }
      if (scrollPos + windowHeight > normalSectionOffset) {
        // New section is in view
        // Perform desired actions for the new section
      }
    });
  });
  