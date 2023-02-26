"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imgIcon = void 0;
const data_1 = require("../hw-2-1/data");
function imgIcon(index) {
    const icon = document.createElement('img');
    icon.src = data_1.data[index].icon;
    icon.classList.add('toggleIcon');
    return icon;
}
exports.imgIcon = imgIcon;
//# sourceMappingURL=imgIcon.js.map