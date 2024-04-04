import { Expect } from "@layer92/core";
export function CanvasToImageData(canvas) {
    const context = canvas.getContext("2d");
    Expect(context, `Canvas had no 2d context.`);
    return context.getImageData(0, 0, canvas.width, canvas.height);
}
