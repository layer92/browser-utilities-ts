import { PromptDownloadUrl } from "./PromptDownloadUrl";

export function PromptDownloadBlob(blob:Blob,options?:{suggestedFileName?:string}){
    const url = URL.createObjectURL(blob);
    PromptDownloadUrl(url,options);
    URL.revokeObjectURL(url);
}