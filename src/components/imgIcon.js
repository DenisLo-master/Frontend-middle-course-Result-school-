import data from "../data";

export function imgIcon(index) {
    const icon = document.createElement("div");
    icon.id = index;
    icon.classList.add("toggleIcon", data[index].icon)
    return icon
}