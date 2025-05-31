import { PromptUrlDownload } from "./PromptUrlDownload";

export function PromptBlobDownload(blob:Blob,options?:{suggestedFileName?:string}){
    const url = URL.createObjectURL(blob);
    PromptUrlDownload(url,options);
    URL.revokeObjectURL(url);
}