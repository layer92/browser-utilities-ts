/** Clears most cookies (still a work in progress) */
export declare function ClearCookies(options: CookieOptions | undefined): void;
export type CookieOptions = {
    /** By default, will be the path of the page that created it. Set to "/" to allow easy access from any page on the site. */
    path?: string;
    /** Default: Year 9999 */
    expirationDate?: Date;
    /** To share cookies across subdomains, you must manually set the cookie domain to the tld (eg "example.com" to use across all of foo.example.com, bar.example.com, and just example.com) */
    domain?: string;
};
/** Pass undefined to remove the key from the cookies. */
export declare function SetCookie(key: string, value: string | undefined, options: CookieOptions | undefined): void;
/** Returns undefined if the key doesn't exist / is expired. */
export declare function MaybeGetCookie(key: string): string | undefined;
/** Pass undefined to remove the key from the cookies. */
export declare function SetJsonCookie(key: string, value: any, options?: CookieOptions): void;
/** Returns undefined if the key doesn't exist / is expired. */
export declare function MaybeGetJsonCookie(key: string): any | undefined;
