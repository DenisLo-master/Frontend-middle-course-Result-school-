"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./index.scss");
const data_1 = require("./data");
const musicControl_1 = require("./musicControl");
const volume_1 = require("./components/volume");
const imgIcon_1 = require("./components/imgIcon");
const toggleMusic_1 = require("./components/toggleMusic");
const root = document.querySelector('#app');
const background = document.querySelector('.background');
const title = document.createElement('h1');
const togglePanel = document.createElement('div');
const audio = document.createElement('audio');
const defaultButtonActive = 0;
function handleVolume(event) {
    audio.volume = +event.target.value;
}
function createButton(index) {
    const toggleWrapper = document.createElement('div');
    toggleWrapper.className = 'toggleWrapper';
    const toggleMusic = (0, toggleMusic_1.toggleMusicUI)(index);
    toggleMusic.dataset.itemId = data_1.data[index].id;
    toggleWrapper.appendChild(toggleMusic);
    const volume = (0, volume_1.volumeUI)({ index, defaultButtonActive });
    volume.oninput = (event) => { handleVolume(event); };
    toggleWrapper.appendChild(volume);
    const icon = (0, imgIcon_1.imgIcon)(index);
    toggleMusic.appendChild(icon);
    return toggleWrapper;
}
function init() {
    background.style.backgroundImage = `url(${data_1.data[defaultButtonActive].bgImage})`;
    title.textContent = 'Weather sounds';
    title.className = 'title';
    title.style.color = data_1.data[defaultButtonActive].color;
    root.appendChild(title);
    togglePanel.className = 'togglePanel';
    audio.loop = true;
    togglePanel.appendChild(audio);
    root.appendChild(togglePanel);
    data_1.data.forEach((_, index) => {
        const toggleWrapper = createButton(index);
        togglePanel.appendChild(toggleWrapper);
    });
}
init();
togglePanel.addEventListener('click', (event) => {
    const buttonWrapper = event.target.closest('[data-item-id]');
    const currentButtonWrapperID = buttonWrapper === null || buttonWrapper === void 0 ? void 0 : buttonWrapper.dataset.itemId;
    const item = data_1.data.find((i) => i.id === currentButtonWrapperID);
    if (item == null)
        return;
    if (currentButtonWrapperID == null)
        return;
    (0, musicControl_1.musicControl)(currentButtonWrapperID, item);
    title.style.color = item.color;
    background.style.backgroundImage = `url(${item.bgImage})`;
});
//# sourceMappingURL=index.js.map