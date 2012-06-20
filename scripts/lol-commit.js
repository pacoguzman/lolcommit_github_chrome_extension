  var LOLCOMMIT = 'https://a248.e.akamai.net/assets.github.com/images/gravatars/gravatar-140.png';

  var commit = window.document.querySelector('body.page-commit-show');
  var dashboard = window.document.querySelector('body.page-dashboard');
  var pull_request = window.document.querySelector('body.page-pullrequest');

  var lolCommitImg = function(sha) {
    return LOLCOMMIT + '?sha=' + sha;
  } 

  var extractSha = function(url){
    var regex = /\w*$/,
        matches = [];
    
    match = regex.exec(url)
    if (match !== undefined)
      matches.push(match[0]) 
    
    if (!matches.length) {
      return;
    }

    return matches[0];
  }

  var changeAuthorshipAvatar = function(){
    var commit_img = window.document.querySelector('.commit-meta .authorship img.gravatar');
    var sha = extractSha(document.location.pathname);

    if (sha !== null && commit_img !== null)
      commit_img.src = lolCommitImg(sha);
      commit_img.height = 140;
      commit_img.width = 140; 
  }

  var changeCommitsAvatar = function(){
    links = window.document.querySelectorAll('.alert .commits ul li code a');
    commit_imgs = window.document.querySelectorAll('.alert .commits ul li span[title] img');
 
    for (var i = links.length - 1; i >= 0; i--) {
      var link = links[i],
          img = commit_imgs[i],
          sha = extractSha(link.href);

      if (img){
        img.src = lolCommitImg(sha);
        img.height = 140;
        img.width = 140; 
      }     
    };
  }

  var changePullCommits = function(){
    links = window.document.querySelectorAll('#commits_bucket .commits td.commit code a');
    commit_imgs = window.document.querySelectorAll('#commits_bucket .commits td.gravatar img');
 
    for (var i = links.length - 1; i >= 0; i--) {
      var link = links[i],
          img = commit_imgs[i],
          sha = extractSha(link.href);

      img.src = lolCommitImg(sha);    
    };
  }

  if (commit) { 
    changeAuthorshipAvatar(); 
  }

  if (dashboard) {
    changeCommitsAvatar();
  }

  if (pull_request) {
    changePullCommits();
  }
