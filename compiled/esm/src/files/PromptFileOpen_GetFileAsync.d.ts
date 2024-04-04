/** Returns a File, or undefined if the user closed the prompt. */
export declare function PromptFileOpen_GetFileAsync({ acceptedExtensions, }: {
    acceptedExtensions?: string[];
}): Promise<File | undefined>;
