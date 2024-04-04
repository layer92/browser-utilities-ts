/**
 *
 * @param canvas
 * @param type png or jpg
 * @param
 * @returns the Blob
 */
export function CanvasToBlobAsync(canvas, options) {
    return new Promise((accept, reject) => {
        try {
            canvas.toBlob(blob => {
                if (blob === null) {
                    reject(new Error(`canvas.toBlob() result was null`));
                    return;
                }
                accept(blob);
            }, options?.blobType, options?.imageQuality);
        }
        catch (error) {
            reject(error);
        }
    });
}
