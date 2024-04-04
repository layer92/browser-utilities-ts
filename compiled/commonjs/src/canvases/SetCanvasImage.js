"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetCanvasImage = void 0;
const core_1 = require("@layer92/core");
/** Makes the canvas become the same as this image (the width/height of the canvas also become the width/height of the image). */
async function SetCanvasImage(canvas, image) {
    canvas.width = image.width;
    canvas.height = image.height;
    const context = canvas.getContext("2d");
    (0, core_1.Expect)(context, `Canvas had no 2d context.`);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
}
exports.SetCanvasImage = SetCanvasImage;
