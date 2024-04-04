export type CanvasToBlobOptions = {
    blobType:"image/png"|"image/jpeg",
    /** Between 0 (worst) and 1 (best). */
    imageQuality:number
};

/**
 * 
 * @param canvas 
 * @param type png or jpg
 * @param 
 * @returns the Blob
 */
export function CanvasToBlobAsync(canvas:HTMLCanvasElement,options?:CanvasToBlobOptions){
    return new Promise<Blob>((accept,reject)=>{
        try{
            canvas.toBlob(
                blob=>{
                    if(blob===null){
                        reject(new Error(`canvas.toBlob() result was null`));
                        return;
                    }
                    accept(blob)
                },
                options?.blobType,
                options?.imageQuality
            );
        }catch(error:any){
            reject(error);
        }
    });
}