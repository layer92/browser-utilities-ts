"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlobToTextAsync = void 0;
const core_1 = require("@layer92/core");
async function BlobToTextAsync(blob) {
    return new Promise((accept, reject) => {
        const fileReader = new FileReader();
        fileReader.onload = () => {
            (0, core_1.Expect)(fileReader.result !== null, `BlobToTextAsync: fileReader result was null`, reject);
            (0, core_1.Expect)(typeof (fileReader.result) === "string", () => `BlobToTextAsync: fileReader result was not a string: typeof(fileReader.result):${typeof (fileReader.result)}`, reject);
            accept(fileReader.result);
        };
        fileReader.readAsText(blob);
    });
}
exports.BlobToTextAsync = BlobToTextAsync;
