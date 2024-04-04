"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CanvasToImageData = void 0;
const core_1 = require("@layer92/core");
function CanvasToImageData(canvas) {
    const context = canvas.getContext("2d");
    (0, core_1.Expect)(context, `Canvas had no 2d context.`);
    return context.getImageData(0, 0, canvas.width, canvas.height);
}
exports.CanvasToImageData = CanvasToImageData;
