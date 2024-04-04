"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaybeMakeDownscaledImageData = void 0;
const core_1 = require("@layer92/core");
/** Note: Returns undefined if scaling isn't needed, else returns a scaled copy of the imageData. */
function MaybeMakeDownscaledImageData(imageData, maxWidth, maxHeight) {
    const xScale = maxWidth / imageData.width;
    const yScale = maxHeight / imageData.height;
    const scale = Math.min(xScale, yScale);
    console.log(xScale, yScale);
    if (scale >= 1) {
        return undefined;
    }
    const sourceCanvas = document.createElement("canvas");
    sourceCanvas.width = imageData.width;
    sourceCanvas.height = imageData.height;
    const sourceContext = sourceCanvas.getContext("2d");
    sourceContext?.putImageData(imageData, 0, 0);
    const destinationCanvas = document.createElement("canvas");
    destinationCanvas.width = imageData.width * scale;
    destinationCanvas.height = imageData.height * scale;
    const destinationContext = destinationCanvas.getContext("2d");
    destinationContext?.clearRect(0, 0, destinationCanvas.width, destinationCanvas.height);
    destinationContext?.drawImage(sourceCanvas, 0, 0, destinationCanvas.width, destinationCanvas.height);
    const result = destinationContext?.getImageData(0, 0, destinationCanvas.width, destinationCanvas.height);
    (0, core_1.Expect)(result, `result was undefined`);
    return result;
}
exports.MaybeMakeDownscaledImageData = MaybeMakeDownscaledImageData;
