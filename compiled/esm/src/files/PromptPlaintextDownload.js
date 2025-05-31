import { PromptBlobDownload } from "./PromptBlobDownloadByUrl";
export function PromptPlaintextDownload(plaintext, options) {
    const blob = new Blob([plaintext], { type: options?.mimeType ?? "text/*" });
    PromptBlobDownload(blob);
}
