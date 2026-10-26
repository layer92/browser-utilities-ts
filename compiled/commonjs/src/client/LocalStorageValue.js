"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetLocalStorageStringAsync = exports.SetLocalStorageStringAsync = exports.GetLocalStorageValueByJsonAsync = exports.SetLocalStorageValueByJsonAsync = exports.GetLocalStorageString = exports.SetLocalStorageString = exports.GetLocalStorageValueByJson = exports.SetLocalStorageValueByJson = void 0;
/** Sets any type of value to localstorage, using JSON.stringify.
 * set to undefined to remove the item from localStorage  */
function SetLocalStorageValueByJson(key, value) {
    if (value === undefined) {
        localStorage.removeItem(key);
    }
    else {
        localStorage.setItem(key, JSON.stringify(value));
    }
}
exports.SetLocalStorageValueByJson = SetLocalStorageValueByJson;
/** Gets any type of value from localstorage, using JSON.parse.
 * @returns undefined if there is no value in localStorage */
function GetLocalStorageValueByJson(key) {
    const jsonString = localStorage.getItem(key);
    if (jsonString === null) {
        return undefined;
    }
    return JSON.parse(jsonString);
}
exports.GetLocalStorageValueByJson = GetLocalStorageValueByJson;
/** Sets a string value to localstorage.
 * set to undefined (not empty string) to remove the item from localStorage  */
function SetLocalStorageString(key, value) {
    if (value === undefined) {
        localStorage.removeItem(key);
    }
    else {
        localStorage.setItem(key, value);
    }
}
exports.SetLocalStorageString = SetLocalStorageString;
/** Gets any type of value from localstorage, using JSON.parse.
 * @returns undefined if there is no value in localStorage */
function GetLocalStorageString(key) {
    const value = localStorage.getItem(key);
    if (value === null) {
        return undefined;
    }
    return value;
}
exports.GetLocalStorageString = GetLocalStorageString;
/** Sets any type of value to localstorage, using JSON.stringify.
 * set to undefined to remove the item from localStorage  */
async function SetLocalStorageValueByJsonAsync(key, value) {
    return new Promise((_accept, _reject) => SetLocalStorageValueByJson(key, value));
}
exports.SetLocalStorageValueByJsonAsync = SetLocalStorageValueByJsonAsync;
/** Gets any type of value from localstorage, using JSON.parse.
 * @returns undefined if there is no value in localStorage */
async function GetLocalStorageValueByJsonAsync(key) {
    return new Promise((_accept, _reject) => GetLocalStorageValueByJson(key));
}
exports.GetLocalStorageValueByJsonAsync = GetLocalStorageValueByJsonAsync;
/** Sets a string value to localstorage.
 * set to undefined (not empty string) to remove the item from localStorage  */
async function SetLocalStorageStringAsync(key, value) {
    return new Promise((_accept, _reject) => SetLocalStorageString(key, value));
}
exports.SetLocalStorageStringAsync = SetLocalStorageStringAsync;
/** Gets any type of value from localstorage, using JSON.parse.
 * @returns undefined if there is no value in localStorage */
async function GetLocalStorageStringAsync(key) {
    return new Promise((_accept, _reject) => GetLocalStorageStringAsync(key));
}
exports.GetLocalStorageStringAsync = GetLocalStorageStringAsync;
