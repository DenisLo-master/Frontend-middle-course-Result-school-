import { data, type MusicInfo } from './data'
let playingMusicId: string

export function musicControl (itemID: string, dataItem: MusicInfo): void {
  const currentButtonWrapper = document.querySelector(`div[data-item-id="${itemID}"]`)?.parentNode as HTMLDivElement

  const volumeCurrent = volumeControl(currentButtonWrapper)

  const audio = document.querySelector('audio') as HTMLAudioElement

  const iconAll = document.querySelectorAll('.toggleIcon')
  const currentIcon = currentButtonWrapper.querySelector('.toggleIcon') as HTMLImageElement

  iconAll.forEach((iconItem: Element, index: number) => {
    if (iconItem instanceof HTMLImageElement) {
      iconItem.src = data[index].icon
    }
  })

  if (!audio?.paused && playingMusicId === dataItem.id) {
    audio.pause()
    currentIcon.src = './assets/icons/pause.svg'
  } else {
    audio.src = dataItem.music
    playingMusicId = dataItem.id
    audio.volume = +volumeCurrent.value
    audio.play().catch((err) => {
      console.error(err)
    })
  }
}

function volumeControl (currentButtonWrapper: HTMLDivElement): HTMLInputElement {
  const volumeAll = document.querySelectorAll('.volume')

  volumeAll.forEach((volumeItem: Element) => {
    if (volumeItem instanceof HTMLInputElement) {
      volumeItem.style.opacity = '0'
    }
  })

  const volumeCurrent = currentButtonWrapper.querySelector('.volume') as HTMLInputElement
  volumeCurrent.style.opacity = '1'
  return volumeCurrent
}
