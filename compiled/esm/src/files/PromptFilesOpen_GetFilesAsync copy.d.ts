/** Returns a File, or undefined if the user closed the prompt. */
export declare function PromptFilesOpen_GetFilesAsync({ acceptedExtensions, }: {
    acceptedExtensions?: string[];
}): Promise<File[] | undefined>;
