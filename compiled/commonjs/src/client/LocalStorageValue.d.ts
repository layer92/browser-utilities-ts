/** Sets any type of value to localstorage, using JSON.stringify.
 * set to undefined to remove the item from localStorage  */
export declare function SetLocalStorageValueByJson(key: string, value: any): void;
/** Gets any type of value from localstorage, using JSON.parse.
 * @returns undefined if there is no value in localStorage */
export declare function GetLocalStorageValueByJson<T>(key: string): T | undefined;
