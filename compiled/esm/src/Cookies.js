import { RemoveExactlyOnceFromStart } from "@layer92/core";
/** Clears most cookies (still a work in progress) */
export function ClearCookies(options) {
    // note that simply iterating through all cookies won't work for cookies that have a path value, accoridng to https://stackoverflow.com/questions/179355/clearing-all-cookies-with-javascript
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
        const key = cookie.split("=")[0];
        SetCookie(key, undefined, options);
    }
}
/** Pass undefined to remove the key from the cookies. */
export function SetCookie(key, value, options) {
    let expirationDate = options?.expirationDate ?? new Date(9999, 0, 1);
    if (value === undefined) {
        expirationDate = new Date(1970, 0, 1);
    }
    const entries = [
        [key, encodeURIComponent(value ?? "")],
        ["expires", expirationDate.toUTCString()],
    ];
    if (options?.path !== undefined) {
        entries.push(["path", options.path]);
    }
    if (options?.domain !== undefined) {
        entries.push(["domain", options.domain]);
    }
    document.cookie = entries.map(([key, value]) => key + "=" + value).join("; ");
}
/** Returns undefined if the key doesn't exist / is expired. */
export function MaybeGetCookie(key) {
    const keyPrefix = key + "=";
    const entry = document.cookie.split("; ").find(entry => entry.startsWith(keyPrefix));
    if (entry === undefined) {
        return undefined;
    }
    return decodeURIComponent(RemoveExactlyOnceFromStart(entry, keyPrefix));
}
/** Pass undefined to remove the key from the cookies. */
export function SetJsonCookie(key, value, options) {
    if (value === undefined) {
        SetCookie(key, undefined, options);
        return;
    }
    SetCookie(key, JSON.stringify(value), options);
}
/** Returns undefined if the key doesn't exist / is expired. */
export function MaybeGetJsonCookie(key) {
    const value = MaybeGetCookie(key);
    if (value === undefined) {
        return undefined;
    }
    return JSON.parse(value);
}
