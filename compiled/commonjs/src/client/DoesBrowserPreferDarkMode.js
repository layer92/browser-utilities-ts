"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoesBrowserPreferDarkMode = void 0;
function DoesBrowserPreferDarkMode() {
    return (window.matchMedia
        && window.matchMedia("(prefers-color-scheme: dark)").matches);
}
exports.DoesBrowserPreferDarkMode = DoesBrowserPreferDarkMode;
