"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.musicControl = void 0;
const data_1 = require("./data");
let playingMusicId;
function musicControl(itemID, dataItem) {
    var _a;
    const currentButtonWrapper = (_a = document.querySelector(`div[data-item-id="${itemID}"]`)) === null || _a === void 0 ? void 0 : _a.parentNode;
    const volumeCurrent = volumeControl(currentButtonWrapper);
    const audio = document.querySelector('audio');
    const iconAll = document.querySelectorAll('.toggleIcon');
    const currentIcon = currentButtonWrapper.querySelector('.toggleIcon');
    iconAll.forEach((iconItem, index) => {
        if (iconItem instanceof HTMLImageElement) {
            iconItem.src = data_1.data[index].icon;
        }
    });
    if (!(audio === null || audio === void 0 ? void 0 : audio.paused) && playingMusicId === dataItem.id) {
        audio.pause();
        currentIcon.src = './assets/icons/pause.svg';
    }
    else {
        audio.src = dataItem.music;
        playingMusicId = dataItem.id;
        audio.volume = +volumeCurrent.value;
        audio.play().catch((err) => {
            console.error(err);
        });
    }
}
exports.musicControl = musicControl;
function volumeControl(currentButtonWrapper) {
    const volumeAll = document.querySelectorAll('.volume');
    volumeAll.forEach((volumeItem) => {
        if (volumeItem instanceof HTMLInputElement) {
            volumeItem.style.opacity = '0';
        }
    });
    const volumeCurrent = currentButtonWrapper.querySelector('.volume');
    volumeCurrent.style.opacity = '1';
    return volumeCurrent;
}
//# sourceMappingURL=musicControl.js.map