export function DoesBrowserPreferDarkMode() {
    return (window.matchMedia
        && window.matchMedia("(prefers-color-scheme: dark)").matches);
}
