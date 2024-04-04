import { Expect } from "@layer92/core";

/** Makes the canvas become the same as this image (the width/height of the canvas also become the width/height of the image). Will also downscale the image at the same time, if the image is bigger than the provided max width/height (this situation will also cause the width/height of the canvas to become the downscaled size). */
export async function SetCanvasImage_MaybeDownscale(
    canvas:HTMLCanvasElement,
    image:HTMLImageElement,
    maxCanvasWidth?:number,
    maxCanvasHeight?:number,
){
    const xScale = (maxCanvasWidth && image.width>maxCanvasWidth) ? maxCanvasWidth/image.width: 1.0;
    const yScale = (maxCanvasHeight && image.height>maxCanvasHeight) ? maxCanvasHeight/image.height: 1.0;
    const scale = Math.min(xScale,yScale);
    canvas.width = Math.round(image.width*scale);
    canvas.height = Math.round(image.height*scale);
    const context = canvas.getContext("2d");
    Expect(context,`Canvas had no 2d context.`);
    context.clearRect(0,0,canvas.width,canvas.height);
    context.drawImage(image,0,0,canvas.width,canvas.height);
}