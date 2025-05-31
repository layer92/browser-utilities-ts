"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromptPlaintextDownload = void 0;
const PromptBlobDownloadByUrl_1 = require("./PromptBlobDownloadByUrl");
function PromptPlaintextDownload(plaintext, options) {
    const blob = new Blob([plaintext], { type: options?.mimeType ?? "text/*" });
    (0, PromptBlobDownloadByUrl_1.PromptBlobDownload)(blob);
}
exports.PromptPlaintextDownload = PromptPlaintextDownload;
