/** Sets any type of value to localstorage, using JSON.stringify.
 * set to undefined to remove the item from localStorage  */
export declare function SetLocalStorageValueByJson(key: string, value: any): void;
/** Gets any type of value from localstorage, using JSON.parse.
 * @returns undefined if there is no value in localStorage */
export declare function GetLocalStorageValueByJson<T>(key: string): T | undefined;
/** Sets a string value to localstorage.
 * set to undefined (not empty string) to remove the item from localStorage  */
export declare function SetLocalStorageString(key: string, value: any): void;
/** Gets any type of value from localstorage, using JSON.parse.
 * @returns undefined if there is no value in localStorage */
export declare function GetLocalStorageString(key: string): string | undefined;
/** Sets any type of value to localstorage, using JSON.stringify.
 * set to undefined to remove the item from localStorage  */
export declare function SetLocalStorageValueByJsonAsync(key: string, value: any): Promise<unknown>;
/** Gets any type of value from localstorage, using JSON.parse.
 * @returns undefined if there is no value in localStorage */
export declare function GetLocalStorageValueByJsonAsync<T>(key: string): Promise<T | undefined>;
/** Sets a string value to localstorage.
 * set to undefined (not empty string) to remove the item from localStorage  */
export declare function SetLocalStorageStringAsync(key: string, value: any): Promise<unknown>;
/** Gets any type of value from localstorage, using JSON.parse.
 * @returns undefined if there is no value in localStorage */
export declare function GetLocalStorageStringAsync(key: string): Promise<string | undefined>;
