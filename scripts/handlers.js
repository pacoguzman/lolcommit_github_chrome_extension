LolCommits.handlers = {
  '.commits code a': function($link, image) {
    image.height = 240;
    image.width  = 320;
    $(image).css({'margin-left':'50px',
                  'display': 'block'});
    $link.closest('li').find('.message').after(image);
  },
  '.commit-title a': function($link, image) {
    $(image).css({'margin-left':'28px',
                  'margin-top': '14px'});
    $link.closest('li').find('.commit-meta').after(image);
  },
  // Avoid conflict with previous selector after its application
  'body.page-commit-show .commit a.browse-button': function($link, image) {
    $(image).css({'margin-left': '28px',
                  'margin-top': '14px'});
    $link.closest('.commit').find('.authorship').after(image);
  }
};

$(document).ready(function() {
  LolCommits.start();

  //Intercept the pageUpdate function
  var pageUpdate = $.fn.pageUpdate;
  $.fn.pageUpdate = function(a) {
    pageUpdate.call(this, a);
    LolCommits.start();
  };
});
