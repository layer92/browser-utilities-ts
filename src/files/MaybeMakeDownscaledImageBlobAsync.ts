import { CanvasToBlobAsync, CanvasToBlobOptions } from "../canvases/CanvasToBlobAsync";
import { SetCanvasImage_MaybeDownscale } from "../canvases/SetCanvasImage_MaybeDownscale";
import { BlobToImageAsync } from "./BlobToImageAsync";

export async function MaybeMakeDownscaledImageBlobAsync(blob:Blob,maxWidth:number,maxHeight:number,options?:CanvasToBlobOptions){
    const image = await BlobToImageAsync(blob);
    const canvas = document.createElement("canvas");
    SetCanvasImage_MaybeDownscale(canvas,image,maxWidth,maxHeight);
    const nextBlob = await CanvasToBlobAsync(canvas,options);
    return nextBlob;
}