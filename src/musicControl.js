import data from "./data";
let playingMusicId;


export function musicControl(itemID) {
    const currentButtonWrapper = document.querySelector(`div[data-item-id="${itemID}"]`)?.parentNode
    const item = data.find((i) => i.id === itemID);
    if (!item) return;

    volumeControl(currentButtonWrapper)

    const audio = document.querySelector("audio");

    const iconAll = document.querySelectorAll(".toggleIcon");
    const currentIcon = currentButtonWrapper.querySelector(".toggleIcon");

    iconAll.forEach((iconItem, index) => {
        iconItem.src = data[index].icon
    })

    if (!audio?.paused && playingMusicId === item.id) {
        audio.pause()
        currentIcon.src = "./assets/icons/pause.svg"
    } else {
        audio.src = item.music
        audio.play()
        playingMusicId = item.id
    }
}

function volumeControl(currentButtonWrapper) {
    const volumeAll = document.querySelectorAll(".volume");

    volumeAll.forEach((volumeItem) => {
        volumeItem.style.opacity = 0
    });

    const volumeCurrent = currentButtonWrapper.querySelector(".volume");
    volumeCurrent.style.opacity = 1
}

