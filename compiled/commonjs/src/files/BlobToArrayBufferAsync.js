"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlobToArrayBufferAsync = void 0;
const core_1 = require("@layer92/core");
async function BlobToArrayBufferAsync(blob) {
    return new Promise((accept, reject) => {
        const fileReader = new FileReader();
        fileReader.onload = () => {
            (0, core_1.Expect)(fileReader.result !== null, `BlobToTextAsync: fileReader result was null`, reject);
            (0, core_1.Expect)(typeof (fileReader.result) !== "string", () => `BlobToTextAsync: fileReader result was string instead of ArrayBuffer`, reject);
            accept(fileReader.result);
        };
        fileReader.readAsArrayBuffer(blob);
    });
}
exports.BlobToArrayBufferAsync = BlobToArrayBufferAsync;
