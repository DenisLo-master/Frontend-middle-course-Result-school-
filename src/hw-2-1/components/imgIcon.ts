import { data } from '../hw-2-1/data'

export function imgIcon (index: number): HTMLImageElement {
  const icon = document.createElement('img')
  icon.src = data[index].icon
  icon.classList.add('toggleIcon')
  return icon
}
