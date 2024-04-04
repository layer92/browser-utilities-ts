"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlobToImageAsync = void 0;
async function BlobToImageAsync(blob) {
    return new Promise((accept, reject) => {
        const url = URL.createObjectURL(blob);
        const image = new Image();
        image.onload = () => {
            // to free the object from memory, accd to: https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL
            URL.revokeObjectURL(url);
            accept(image);
        };
        image.src = url;
    });
}
exports.BlobToImageAsync = BlobToImageAsync;
