function allowCopy () {
  const root = document.querySelectorAll('.ps')[1].children[0].children[2]
  const imgs = root.querySelectorAll('img')
  const lastImg = imgs[imgs.length - 1]
  const articleEle = lastImg.parentNode.parentNode
  console.log(articleEle)

  articleEle.addEventListener('copy', (e) => {
    e.stopPropagation()
  })
}

function main () {
  if (!location.href.includes('time.geekbang.org')) return
  setTimeout(allowCopy, 3000)
}
main()
