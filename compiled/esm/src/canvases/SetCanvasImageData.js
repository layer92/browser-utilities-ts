import { Expect } from "@layer92/core";
/** Makes the canvas become the same as this image. */
export async function SetCanvasImageData(canvas, imageData) {
    canvas.width = imageData.width;
    canvas.height = imageData.height;
    const context = canvas.getContext("2d");
    Expect(context, `Canvas had no 2d context.`);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.putImageData(imageData, 0, 0);
}
