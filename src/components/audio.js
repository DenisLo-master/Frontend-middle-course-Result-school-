import data from "../data";

export function audioUI(index) {
    const audio = document.createElement("audio");
    audio.src = data[index].music
    audio.id = "audio" + index
    audio.loop = "loop"

    return audio
}