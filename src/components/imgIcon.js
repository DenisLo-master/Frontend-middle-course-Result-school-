import data from "../data";

export function imgIcon(index) {
    const icon = document.createElement("img");
    icon.src = data[index].icon
    icon.classList.add("toggleIcon")
    return icon
}