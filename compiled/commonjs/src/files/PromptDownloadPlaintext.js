"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromptDownloadPlaintext = void 0;
const PromptDownloadBlob_1 = require("./PromptDownloadBlob");
function PromptDownloadPlaintext(plaintext, options) {
    const blob = new Blob([plaintext], { type: options?.mimeType ?? "text/*" });
    (0, PromptDownloadBlob_1.PromptDownloadBlob)(blob, { suggestedFileName: options?.suggestedFileName });
}
exports.PromptDownloadPlaintext = PromptDownloadPlaintext;
