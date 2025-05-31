"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromptFileDownloadByUrl = exports.PromptDownloadUrl = void 0;
function PromptDownloadUrl(url, options) {
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
exports.PromptDownloadUrl = PromptDownloadUrl;
/** DEPRECATED */
function PromptFileDownloadByUrl(url, suggestedFileName) {
    PromptDownloadUrl(url, { suggestedFileName });
}
exports.PromptFileDownloadByUrl = PromptFileDownloadByUrl;
