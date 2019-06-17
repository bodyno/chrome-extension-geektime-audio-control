function allowCopy () {
  const root = document.querySelectorAll('.ps')[1].children[0].children[2]
  const imgs = root.querySelectorAll('img')
  const lastImg = imgs[imgs.length - 1]
  const articleEle = lastImg.parentNode.parentNode

  articleEle.addEventListener('copy', (e) => {
    e.stopPropagation()
  })
}

function main () {
  setTimeout(allowCopy, 1000)

}
main()
