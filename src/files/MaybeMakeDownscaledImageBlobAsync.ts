import { CanvasToBlobAsync, CanvasToBlobOptions } from "../canvases/CanvasToBlobAsync";
import { SetCanvasImage_MaybeDownscale } from "../canvases/SetCanvasImage_MaybeDownscale";
import { BlobToImageAsync } from "./BlobToImageAsync";

/** DEPRECATED ALIAS - use MakeMaybeDownscaledImageBlobAsync */
export async function MaybeMakeDownscaledImageBlobAsync(blob:Blob,maxWidth:number,maxHeight:number,options?:CanvasToBlobOptions){
    const image = await BlobToImageAsync(blob);
    const canvas = document.createElement("canvas");
    SetCanvasImage_MaybeDownscale(canvas,image,maxWidth,maxHeight);
    const nextBlob = await CanvasToBlobAsync(canvas,options);
    return nextBlob;
}

/** Converts the blob, and possibly downscales it as well. You can specify the format (JPG, PNG, etc) using options. */
export async function MakeMaybeDownscaledImageBlobAsync(blob:Blob,maxWidth:number,maxHeight:number,options?:CanvasToBlobOptions){
    const image = await BlobToImageAsync(blob);
    const canvas = document.createElement("canvas");
    SetCanvasImage_MaybeDownscale(canvas,image,maxWidth,maxHeight);
    const nextBlob = await CanvasToBlobAsync(canvas,options);
    return nextBlob;
}