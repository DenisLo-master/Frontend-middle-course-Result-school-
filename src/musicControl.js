export function audioControl(event) {
    const audioAll = document.querySelectorAll("audio");
    const audioId = "audio" + [event.target.id]
    const audioCurrent = document.getElementById(audioId);
    audioAll.forEach((audioItem) => {
        audioItem !== audioCurrent && audioItem.pause()
    });
    if (audioCurrent?.paused) {
        audioCurrent.play()
    } else if (!audioCurrent?.paused) {
        audioCurrent.pause()
    }
    return audioCurrent?.paused
}

export function volumeControl(event) {
    const volumeAll = document.querySelectorAll(".volume");
    volumeAll.forEach((volumeItem) => {
        volumeItem.style.opacity = 0
    });
    const volumeId = "volume" + [event.target.id]
    const volumeCurrent = document.getElementById(volumeId);
    volumeCurrent.style.opacity = 1
}

export function iconControl({ audioState, currentId }) {
    const iconAll = document.querySelectorAll(".toggleIcon");
    iconAll.forEach((iconItem) => {
        iconItem.classList.remove("pauseIcon")
        if (audioState && iconItem.id === currentId) {
            iconItem.classList.add("pauseIcon")
        }
    })
}