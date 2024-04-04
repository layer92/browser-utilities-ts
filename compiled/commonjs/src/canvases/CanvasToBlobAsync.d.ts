export type CanvasToBlobOptions = {
    blobType: "image/png" | "image/jpeg";
    /** Between 0 (worst) and 1 (best). */
    imageQuality: number;
};
/**
 *
 * @param canvas
 * @param type png or jpg
 * @param
 * @returns the Blob
 */
export declare function CanvasToBlobAsync(canvas: HTMLCanvasElement, options?: CanvasToBlobOptions): Promise<Blob>;
