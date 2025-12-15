"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MakeMaybeDownscaledImageBlobAsync = exports.MaybeMakeDownscaledImageBlobAsync = void 0;
const CanvasToBlobAsync_1 = require("../canvases/CanvasToBlobAsync");
const SetCanvasImage_MaybeDownscale_1 = require("../canvases/SetCanvasImage_MaybeDownscale");
const BlobToImageAsync_1 = require("./BlobToImageAsync");
/** DEPRECATED ALIAS - use MakeMaybeDownscaledImageBlobAsync */
async function MaybeMakeDownscaledImageBlobAsync(blob, maxWidth, maxHeight, options) {
    const image = await (0, BlobToImageAsync_1.BlobToImageAsync)(blob);
    const canvas = document.createElement("canvas");
    (0, SetCanvasImage_MaybeDownscale_1.SetCanvasImage_MaybeDownscale)(canvas, image, maxWidth, maxHeight);
    const nextBlob = await (0, CanvasToBlobAsync_1.CanvasToBlobAsync)(canvas, options);
    return nextBlob;
}
exports.MaybeMakeDownscaledImageBlobAsync = MaybeMakeDownscaledImageBlobAsync;
/** Converts the blob, and possibly downscales it as well. You can specify the format (JPG, PNG, etc) using options. */
async function MakeMaybeDownscaledImageBlobAsync(blob, maxWidth, maxHeight, options) {
    const image = await (0, BlobToImageAsync_1.BlobToImageAsync)(blob);
    const canvas = document.createElement("canvas");
    (0, SetCanvasImage_MaybeDownscale_1.SetCanvasImage_MaybeDownscale)(canvas, image, maxWidth, maxHeight);
    const nextBlob = await (0, CanvasToBlobAsync_1.CanvasToBlobAsync)(canvas, options);
    return nextBlob;
}
exports.MakeMaybeDownscaledImageBlobAsync = MakeMaybeDownscaledImageBlobAsync;
