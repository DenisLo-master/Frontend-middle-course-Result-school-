import data from "./data"
import './index.scss'

const root = document.querySelector('#app')

function renderItem(item) {
  const li = document.createElement('li')
  li.textContent = item.title
  console.log("working")
  root.append(li)
}

data.forEach(renderItem)
