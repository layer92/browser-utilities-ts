
/** Sets any type of value to localstorage, using JSON.stringify.
 * set to undefined to remove the item from localStorage  */
export function SetLocalStorageValueByJson(key:string,value:any){
    if(value===undefined){
        localStorage.removeItem(key);
    }else{
        localStorage.setItem(key,JSON.stringify(value));
    }
}

/** Gets any type of value from localstorage, using JSON.parse.
 * @returns undefined if there is no value in localStorage */
export function GetLocalStorageValueByJson<T>(key:string):T|undefined{
    const jsonString = localStorage.getItem(key);
    if(jsonString===null){
        return undefined;
    }
    return JSON.parse(jsonString) as T;
}