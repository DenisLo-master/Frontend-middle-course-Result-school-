import './index.scss'
import { data } from './data'
import { musicControl } from './musicControl'
import { volumeUI } from './components/volume'
import { imgIcon } from './components/imgIcon'
import { toggleMusicUI } from './components/toggleMusic'

const root = document.querySelector('#app') as HTMLElement
const background = document.querySelector('.background') as HTMLImageElement
const title = document.createElement('h1')
const togglePanel = document.createElement('div')
const audio = document.createElement('audio')

const defaultButtonActive: number = 0

function handleVolume (event: Event): void {
  audio.volume = +(event.target as HTMLInputElement).value
}

function createButton (index: number): HTMLDivElement {
  const toggleWrapper = document.createElement('div')
  toggleWrapper.className = 'toggleWrapper'

  const toggleMusic = toggleMusicUI(index)
  toggleMusic.dataset.itemId = data[index].id
  toggleWrapper.appendChild(toggleMusic)

  const volume = volumeUI({ index, defaultButtonActive })
  volume.oninput = (event: Event) => { handleVolume(event) }
  toggleWrapper.appendChild(volume)

  const icon = imgIcon(index)
  toggleMusic.appendChild(icon)
  return toggleWrapper
}

function init (): void {
  background.style.backgroundImage = `url(${data[defaultButtonActive].bgImage})`

  title.textContent = 'Weather sounds'
  title.className = 'title'
  title.style.color = data[defaultButtonActive].color
  root.appendChild(title)

  togglePanel.className = 'togglePanel'

  audio.loop = true
  togglePanel.appendChild(audio)

  root.appendChild(togglePanel)
  data.forEach((_, index) => {
    const toggleWrapper = createButton(index)
    togglePanel.appendChild(toggleWrapper)
  })
}

init()

togglePanel.addEventListener('click', (event: MouseEvent): void => {
  const buttonWrapper: HTMLElement | null = (event.target as HTMLElement).closest('[data-item-id]')
  const currentButtonWrapperID: string | undefined = buttonWrapper?.dataset.itemId
  const item = data.find((i) => i.id === currentButtonWrapperID)
  if (item == null) return

  if (currentButtonWrapperID == null) return
  musicControl(currentButtonWrapperID, item)
  title.style.color = item.color
  background.style.backgroundImage = `url(${item.bgImage})`
})
