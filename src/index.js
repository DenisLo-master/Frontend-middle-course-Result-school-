import "./index.scss";
import data from "./data";
import { musicControl } from "./musicControl";
import { volumeUI } from "./components/volume";
import { imgIcon } from "./components/imgIcon";
import { toggleMusicUI } from "./components/toggleMusic";

const root = document.querySelector("#app");
const background = document.querySelector(".background")
const title = document.createElement("h1");
const togglePanel = document.createElement("div");


const defaultButtonActive = 0;


function handleVolume(event) {
    const audioCurrent = event.target.childNodes[0]
    audioCurrent.volume = event.target.value
}


function createButton(item, index) {
    const toggleWrapper = document.createElement("div");
    toggleWrapper.className = "toggleWrapper"

    const toggleMusic = toggleMusicUI(index)
    toggleMusic.dataset.itemId = data[index].id
    toggleWrapper.appendChild(toggleMusic)

    const volume = volumeUI({ index, defaultButtonActive })
    volume.oninput = (event) => handleVolume(event);
    toggleWrapper.appendChild(volume);

    const icon = imgIcon(index)
    toggleMusic.appendChild(icon);
    return toggleWrapper;
}

function init() {
    background.style.backgroundImage = `url(${data[defaultButtonActive].bgImage})`;

    title.textContent = "Weather sounds"
    title.className = "title"
    title.style.color = data[defaultButtonActive].color
    root.appendChild(title);


    togglePanel.className = "togglePanel";
    const audio = document.createElement("audio");
    audio.loop = true
    togglePanel.appendChild(audio)

    root.appendChild(togglePanel);
    data.forEach((item, index) => {
        const toggleWrapper = createButton(item, index);
        togglePanel.appendChild(toggleWrapper);
    });
}


init();

togglePanel.addEventListener('click', ({ target }) => {
    const currentButtonWrapperID = target.closest('[data-item-id]')?.dataset.itemId
    if (!currentButtonWrapperID) return;
    musicControl(currentButtonWrapperID)
});
