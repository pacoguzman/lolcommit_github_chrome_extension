// inject listen.js into current webpage
function inject(extension_url){
  var s = document.createElement('script');
  s.src = chrome.extension.getURL(extension_url);
  s.onload = function() {
    this.parentNode.removeChild(this);
  };
  (document.body||document.documentElement).appendChild(s);
}

inject('scripts/lol-commits.js');
inject('scripts/handlers.js');
