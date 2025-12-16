/**
 * Normalizes cstyle input to a string format
 */
export declare function normalizeCstyle(cstyle: string | object | any[] | null | undefined): string;
/**
 * Merges parent and child cstyle strings
 * Child properties override parent properties
 * Properties not specified in child are inherited from parent
 */
export declare function mergeCstyle(parentCstyle: string | object | any[] | null | undefined, childCstyle: string | object | any[] | null | undefined): string;
//# sourceMappingURL=helpers.d.ts.map