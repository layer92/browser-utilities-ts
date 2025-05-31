"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromptFileDownloadByUrl = exports.PromptUrlDownload = void 0;
function PromptUrlDownload(url, options) {
    const anchor = document.createElement("a");
    if (options?.suggestedFileName) {
        anchor.download = options?.suggestedFileName;
    }
    anchor.href = url;
    // in most modern browsers, you dont need to add it to the body first, but doing so for backward-compatibility
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
}
exports.PromptUrlDownload = PromptUrlDownload;
/** DEPRECATED */
function PromptFileDownloadByUrl(url, suggestedFileName) {
    PromptUrlDownload(url, { suggestedFileName });
}
exports.PromptFileDownloadByUrl = PromptFileDownloadByUrl;
