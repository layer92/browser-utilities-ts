/** Sets any type of value to localstorage, using JSON.stringify.
 * set to undefined to remove the item from localStorage  */
export function SetLocalStorageValueByJson(key, value) {
    if (value === undefined) {
        localStorage.removeItem(key);
    }
    else {
        localStorage.setItem(key, JSON.stringify(value));
    }
}
/** Gets any type of value from localstorage, using JSON.parse.
 * @returns undefined if there is no value in localStorage */
export function GetLocalStorageValueByJson(key) {
    const jsonString = localStorage.getItem(key);
    if (jsonString === null) {
        return undefined;
    }
    return JSON.parse(jsonString);
}
/** Sets a string value to localstorage.
 * set to undefined (not empty string) to remove the item from localStorage  */
export function SetLocalStorageString(key, value) {
    if (value === undefined) {
        localStorage.removeItem(key);
    }
    else {
        localStorage.setItem(key, value);
    }
}
/** Gets any type of value from localstorage, using JSON.parse.
 * @returns undefined if there is no value in localStorage */
export function GetLocalStorageString(key) {
    const value = localStorage.getItem(key);
    if (value === null) {
        return undefined;
    }
    return value;
}
/** Sets any type of value to localstorage, using JSON.stringify.
 * set to undefined to remove the item from localStorage  */
export async function SetLocalStorageValueByJsonAsync(key, value) {
    return new Promise((_accept, _reject) => SetLocalStorageValueByJson(key, value));
}
/** Gets any type of value from localstorage, using JSON.parse.
 * @returns undefined if there is no value in localStorage */
export async function GetLocalStorageValueByJsonAsync(key) {
    return new Promise((_accept, _reject) => GetLocalStorageValueByJson(key));
}
/** Sets a string value to localstorage.
 * set to undefined (not empty string) to remove the item from localStorage  */
export async function SetLocalStorageStringAsync(key, value) {
    return new Promise((_accept, _reject) => SetLocalStorageString(key, value));
}
/** Gets any type of value from localstorage, using JSON.parse.
 * @returns undefined if there is no value in localStorage */
export async function GetLocalStorageStringAsync(key) {
    return new Promise((_accept, _reject) => GetLocalStorageStringAsync(key));
}
