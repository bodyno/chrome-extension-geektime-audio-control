'use strict';

function allowCopy() {
  var root = document.querySelectorAll('.ps')[1].children[0].children[2];
  var imgs = root.querySelectorAll('img');
  var lastImg = imgs[imgs.length - 1];
  var articleEle = lastImg.parentNode.parentNode;
  console.log(articleEle);

  articleEle.addEventListener('copy', function (e) {
    e.stopPropagation();
  });
}

function main() {
  if (!location.href.includes('time.geekbang.org')) return;
  setTimeout(allowCopy, 3000);
}
main();