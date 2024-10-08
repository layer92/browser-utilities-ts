import { Expect } from "@layer92/core";

/** Returns a File, or undefined if the user closed the prompt. */
export function PromptFilesOpen_GetFilesAsync({
    acceptedExtensions,
}: {
    acceptedExtensions?: string[];
}){
    return new Promise<File[]|undefined>((accept,reject)=>{
        const input = document.createElement("input");
        input.type="file";
        if(acceptedExtensions){
            Expect(acceptedExtensions?.every(a=>a.startsWith(".")),`Expected extension to start with "."`);
            input.accept=acceptedExtensions.join(", ");
        }
        input.multiple = true;
        input.onchange = ()=>{
            const files = input.files;
            if(files===null){
                return accept(undefined);
            }
            return accept(Array.from(files));
        };
        input.click();
    });
}