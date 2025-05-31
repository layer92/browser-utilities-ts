import { PromptDownloadUrl } from "./PromptDownloadUrl";
export function PromptDownloadBlob(blob, options) {
    const url = URL.createObjectURL(blob);
    PromptDownloadUrl(url, options);
    URL.revokeObjectURL(url);
}
