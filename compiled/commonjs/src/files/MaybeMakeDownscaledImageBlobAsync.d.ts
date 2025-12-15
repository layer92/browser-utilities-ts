import { CanvasToBlobOptions } from "../canvases/CanvasToBlobAsync";
/** DEPRECATED ALIAS - use MakeMaybeDownscaledImageBlobAsync */
export declare function MaybeMakeDownscaledImageBlobAsync(blob: Blob, maxWidth: number, maxHeight: number, options?: CanvasToBlobOptions): Promise<Blob>;
/** Converts the blob, and possibly downscales it as well. You can specify the format (JPG, PNG, etc) using options. */
export declare function MakeMaybeDownscaledImageBlobAsync(blob: Blob, maxWidth: number, maxHeight: number, options?: CanvasToBlobOptions): Promise<Blob>;
