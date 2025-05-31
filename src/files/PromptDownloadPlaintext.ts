import { PromptDownloadBlob } from "./PromptDownloadBlob";

export function PromptDownloadPlaintext(plaintext:string,options?:{
    mimeType?:string,
    suggestedFileName?:string
}){
    const blob = new Blob([plaintext],{type:options?.mimeType??"text/*"});
    PromptDownloadBlob(blob,{suggestedFileName:options?.suggestedFileName});
}