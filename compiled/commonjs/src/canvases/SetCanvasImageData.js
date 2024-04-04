"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetCanvasImageData = void 0;
const core_1 = require("@layer92/core");
/** Makes the canvas become the same as this image. */
async function SetCanvasImageData(canvas, imageData) {
    canvas.width = imageData.width;
    canvas.height = imageData.height;
    const context = canvas.getContext("2d");
    (0, core_1.Expect)(context, `Canvas had no 2d context.`);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.putImageData(imageData, 0, 0);
}
exports.SetCanvasImageData = SetCanvasImageData;
