(function($) {
  "use strict";
  
  // Photo slider
  $("#photo").bxSlider({
    auto: true,             // Slides will automatically transition (true / false).
    mode: "fade",           // Type of transition between slides ("horizontal", "vertical", "fade").
    controls: false,        // If true, "Next" / "Prev" controls will be added (true / false).
    autoControls: false,    // If true, "Start" / "Stop" controls will be added (true / false).
    pager: true             // If true, a pager will be added. false - if using more than 3 images (true / false).
  });

  // Portfolio images
  $('a[data-rel]').each(function() {
    $(this).attr('rel', $(this).data('rel'));
  });
  $("a[rel^='portfolio']").prettyPhoto({
    overlay_gallery: false,
    social_tools: false
  });

})(jQuery);