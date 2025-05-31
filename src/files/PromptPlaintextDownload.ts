import { PromptBlobDownload } from "./PromptBlobDownloadByUrl";
import { PromptUrlDownload } from "./PromptUrlDownload";

export function PromptPlaintextDownload(plaintext:string,options?:{
    mimeType?:string,
    suggestedFileName?:string
}){
    const blob = new Blob([plaintext],{type:options?.mimeType??"text/*"});
    PromptBlobDownload(blob);
}