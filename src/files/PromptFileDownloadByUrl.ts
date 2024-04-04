export function PromptFileDownloadByUrl(url:string,suggestedFileName?:string){
    const anchor = document.createElement("a");
    if(suggestedFileName){
        anchor.download = suggestedFileName;
    }
    anchor.href = url;
    // in most modern browsers, you dont need to add it to the body first, but doing so for backward-compatibility
    anchor.style.display="none";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
}