import { CanvasToBlobAsync } from "../canvases/CanvasToBlobAsync";
import { SetCanvasImage_MaybeDownscale } from "../canvases/SetCanvasImage_MaybeDownscale";
import { BlobToImageAsync } from "./BlobToImageAsync";
export async function MaybeMakeDownscaledImageBlobAsync(blob, maxWidth, maxHeight, options) {
    const image = await BlobToImageAsync(blob);
    const canvas = document.createElement("canvas");
    SetCanvasImage_MaybeDownscale(canvas, image, maxWidth, maxHeight);
    const nextBlob = await CanvasToBlobAsync(canvas, options);
    return nextBlob;
}
