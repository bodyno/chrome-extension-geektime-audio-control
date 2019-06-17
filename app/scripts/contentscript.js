'use strict';

function allowCopy() {
  var root = document.querySelectorAll('.ps')[1].children[0].children[2];
  var imgs = root.querySelectorAll('img');
  var lastImg = imgs[imgs.length - 1];
  var articleEle = lastImg.parentNode.parentNode;

  articleEle.addEventListener('copy', function (e) {
    e.stopPropagation();
  });
}

function main() {
  setTimeout(allowCopy, 1000);
}
main();