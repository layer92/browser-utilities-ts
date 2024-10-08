"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromptFilesOpen_GetFilesAsync = void 0;
const core_1 = require("@layer92/core");
/** Returns a File, or undefined if the user closed the prompt. */
function PromptFilesOpen_GetFilesAsync({ acceptedExtensions, }) {
    return new Promise((accept, reject) => {
        const input = document.createElement("input");
        input.type = "file";
        if (acceptedExtensions) {
            (0, core_1.Expect)(acceptedExtensions?.every(a => a.startsWith(".")), `Expected extension to start with "."`);
            input.accept = acceptedExtensions.join(", ");
        }
        input.multiple = true;
        input.onchange = () => {
            const files = input.files;
            if (files === null) {
                return accept(undefined);
            }
            return accept(Array.from(files));
        };
        input.click();
    });
}
exports.PromptFilesOpen_GetFilesAsync = PromptFilesOpen_GetFilesAsync;
