LolCommits.handlers = {
  '.commits code a':function ($link, image) {
    image.height = 240;
    image.width  = 320;
    $(image).css('margin-left', '50px');
    $link.parents('li').find('.message').after(image);
  },
  '.commit-title a':function ($link, image) {
    $link.parents('.commit-title').after(image);
  },
  '.commit a.browse-button':function ($link, image) {
    $(image).css('margin-left', '28px');
    $(image).css('margin-top', '14px');
    $link.parents('.commit').find('.authorship').after(image);
  }
};

$(document).ready(function(){
  window.document.addEventListener('DOMNodeInserted', function(){
    LolCommits.start();
  });

  LolCommits.start();

  //Intercept the pageUpdate function
//  var pageUpdate = $.fn.pageUpdate;
//  $.fn.pageUpdate = function (a) {
//    console.log('refreshing');
//    pageUpdate.call(this, a);
//    LolCommits.start();
//  }
});