"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleMusicUI = void 0;
const data_1 = require("../hw-2-1/data");
function toggleMusicUI(index) {
    const toggleMusic = document.createElement('div');
    toggleMusic.style.backgroundImage = `url(${data_1.data[index].bgImage})`;
    toggleMusic.className = 'toggleMusic';
    return toggleMusic;
}
exports.toggleMusicUI = toggleMusicUI;
//# sourceMappingURL=toggleMusic.js.map