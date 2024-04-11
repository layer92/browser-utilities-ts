import { Expect } from "@layer92/core";
export async function BlobToArrayBufferAsync(blob) {
    return new Promise((accept, reject) => {
        const fileReader = new FileReader();
        fileReader.onload = () => {
            Expect(fileReader.result !== null, `BlobToTextAsync: fileReader result was null`, reject);
            Expect(typeof (fileReader.result) !== "string", () => `BlobToTextAsync: fileReader result was string instead of ArrayBuffer`, reject);
            accept(fileReader.result);
        };
        fileReader.readAsArrayBuffer(blob);
    });
}
