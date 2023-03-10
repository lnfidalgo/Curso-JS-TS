interface VideoElements {
  video: HTMLVideoElement
  playButton: HTMLButtonElement
  resetButton: HTMLButtonElement
}

interface VideoActions {
  playTogle(): void
  resetVideo(): void
  callActions(): void
}


export default class VideoPlayer implements VideoActions {
  private video: HTMLVideoElement
  private playButton: HTMLButtonElement
  private resetButton: HTMLButtonElement

  constructor (videoElements: VideoElements) {
    this.video = videoElements.video
    this.playButton = videoElements.playButton
    this.resetButton = videoElements.resetButton
  }

  playTogle(): void {
    if (this.video.paused) {
      this.video.play
      this.playButton.innerText = 'Paused'
    } else {
      this.video.pause
      this.playButton.innerText = 'Play'
    }
  }

  resetVideo(): void {
    this.video.pause
    this.video.currentTime = 0
    this.playButton.innerText = 'Play'
  }

  callActions(): void {
    this.playButton.addEventListener('click', () => {
      this.playTogle()
    })

    this.resetButton.addEventListener('click', () => {
      this.resetVideo()
    })
  }
}

const videoPlayer = new VideoPlayer({
  video: document.querySelector('.video') as HTMLVideoElement,
  playButton: document.querySelector('.play') as HTMLButtonElement,
  resetButton: document.querySelector('.reset') as HTMLButtonElement
})

videoPlayer.callActions()
