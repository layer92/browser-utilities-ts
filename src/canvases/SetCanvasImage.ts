import { Expect } from "@layer92/core";

/** Makes the canvas become the same as this image (the width/height of the canvas also become the width/height of the image). */
export async function SetCanvasImage(
    canvas:HTMLCanvasElement,
    image:HTMLImageElement
){
    canvas.width = image.width;
    canvas.height = image.height;
    const context = canvas.getContext("2d");
    Expect(context,`Canvas had no 2d context.`);
    context.clearRect(0,0,canvas.width,canvas.height);
    context.drawImage(image,0,0,canvas.width,canvas.height);
}