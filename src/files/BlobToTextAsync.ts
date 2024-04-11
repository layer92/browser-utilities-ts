import { Expect } from "@layer92/core";

export async function BlobToTextAsync(blob:Blob){
    return new Promise<string>((accept,reject)=>{
        const fileReader = new FileReader();
        fileReader.onload = ()=>{
            Expect(fileReader.result!==null,`BlobToTextAsync: fileReader result was null`,reject);
            Expect(typeof(fileReader.result)==="string",()=>`BlobToTextAsync: fileReader result was not a string: typeof(fileReader.result):${typeof(fileReader.result)}`,reject);
            accept(fileReader.result);
        }
        fileReader.readAsText(blob);
    });
}