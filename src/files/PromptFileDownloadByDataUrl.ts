export function PromptFileDownloadByDataUrl(dataUrl:string,suggestedFileName:string){
    const anchor = document.createElement("a");
    anchor.download = suggestedFileName;
    anchor.href = dataUrl;
    // in most modern browsers, you dont need to add it to the body first, but doing so for backward-compatibility
    anchor.style.display="none";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
}