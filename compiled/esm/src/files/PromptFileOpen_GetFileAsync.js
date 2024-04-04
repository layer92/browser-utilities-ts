import { Expect } from "@layer92/core";
/** Returns a File, or undefined if the user closed the prompt. */
export function PromptFileOpen_GetFileAsync({ acceptedExtensions, }) {
    return new Promise((accept, reject) => {
        const input = document.createElement("input");
        input.type = "file";
        if (acceptedExtensions) {
            Expect(acceptedExtensions?.every(a => a.startsWith(".")), `Expected extension to start with "."`);
            input.accept = acceptedExtensions.join(", ");
        }
        input.multiple = false;
        input.onchange = () => {
            const files = input.files;
            if (files === null) {
                return accept(undefined);
            }
            Expect(files.length === 1, `input.multiple=false, yet multiple files were selected.`);
            const file = files[0];
            return accept(file);
        };
        input.click();
    });
}
