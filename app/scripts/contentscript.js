class Player {
  source
  videoEle
  playing = false
  rate = 1
  getSource () {
    const audioEle = document.querySelector('audio')
    if (!audioEle) return
    this.source = audioEle.getAttribute('src')
  }
  sleep (time) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve()
      }, time)
    })
  }
  togglePlaying () {
    if (!this.playing) {
      this.videoEle.play()
      this.playing = true
    } else {
      this.videoEle.pause()
      this.playing = false
    }
  }
  switchRate () {
    if (this.rate !== 2) {
      this.rate = 2
    } else {
      this.rate = 1
    }
    this.videoEle.playbackRate = this.rate
  }
  initPlayer () {
    this.videoEle = document.createElement('video')
    const hls = new Hls()
    hls.loadSource(this.source)
    hls.attachMedia(this.videoEle)
  }
  initEvent () {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'a') {
        this.togglePlaying()
      }
      if (e.key === 'q') {
        this.switchRate()
      }
    })
  }
  async init () {
    await this.sleep(1000)
    this.getSource()
    if (!this.source) {
      return
    }
    this.initPlayer()
    this.initEvent()
  }
}

function main () {
  if (!location.href.includes('time.geekbang.org')) return
  const player = new Player()
  player.init()
}
main()
