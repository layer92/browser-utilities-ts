"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromptBlobDownload = void 0;
const PromptUrlDownload_1 = require("./PromptUrlDownload");
function PromptBlobDownload(blob, options) {
    const url = URL.createObjectURL(blob);
    (0, PromptUrlDownload_1.PromptUrlDownload)(url, options);
    URL.revokeObjectURL(url);
}
exports.PromptBlobDownload = PromptBlobDownload;
