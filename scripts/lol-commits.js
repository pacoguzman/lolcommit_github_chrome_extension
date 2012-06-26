var LolCommits = {
  handlers: {},

  start: function() {
    for (selector in LolCommits.handlers) {
      $(selector).each(function() {
        LolCommits.insertImage($(this), LolCommits.handlers[selector]);
      });
    }
  },

  repoAndSha: function(url) {
    var parts = url.split('/').reverse(),
        sha   = parts[0].substr(0, 11),
        repo  = parts[2];
    return repo + '/' + sha;
  },

  insertImage: function($item, handler) {
    var repoAndSha = LolCommits.repoAndSha($item.attr('href')),
        url = LolCommits.image_base_url + repoAndSha + '.jpg',
        img = window.document.createElement('img');
    img.src = url;
    img.onload = function() {
      handler($item, img);
    };
  },

  image_base_url: 'https://s3-eu-west-1.amazonaws.com/lolcommits-uploader/'
}
