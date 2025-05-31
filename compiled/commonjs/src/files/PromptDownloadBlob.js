"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromptDownloadBlob = void 0;
const PromptDownloadUrl_1 = require("./PromptDownloadUrl");
function PromptDownloadBlob(blob, options) {
    const url = URL.createObjectURL(blob);
    (0, PromptDownloadUrl_1.PromptDownloadUrl)(url, options);
    URL.revokeObjectURL(url);
}
exports.PromptDownloadBlob = PromptDownloadBlob;
