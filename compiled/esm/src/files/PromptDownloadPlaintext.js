import { PromptDownloadBlob } from "./PromptDownloadBlob";
export function PromptDownloadPlaintext(plaintext, options) {
    const blob = new Blob([plaintext], { type: options?.mimeType ?? "text/*" });
    PromptDownloadBlob(blob);
}
