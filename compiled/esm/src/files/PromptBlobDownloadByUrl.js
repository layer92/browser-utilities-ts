import { PromptUrlDownload } from "./PromptUrlDownload";
export function PromptBlobDownload(blob, options) {
    const url = URL.createObjectURL(blob);
    PromptUrlDownload(url, options);
    URL.revokeObjectURL(url);
}
