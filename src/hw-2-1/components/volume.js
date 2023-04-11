"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.volumeUI = void 0;
function volumeUI({ index, defaultButtonActive }) {
    const volume = document.createElement('input');
    volume.className = 'volume';
    volume.type = 'range';
    volume.min = '0';
    volume.max = '1';
    volume.step = '0.01';
    volume.value = '0.5';
    if (index === defaultButtonActive) {
        volume.style.opacity = '1';
    }
    else {
        volume.style.opacity = '0';
    }
    return volume;
}
exports.volumeUI = volumeUI;
//# sourceMappingURL=volume.js.map