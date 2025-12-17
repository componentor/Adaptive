/**
 * Normalizes cstyle input to a string format
 */
export declare function normalizeCstyle(cstyle: string | object | any[] | null | undefined): string;
type CstyleInput = string | object | any[] | null | undefined;
/**
 * Merges multiple cstyle inputs
 * Left arguments override right arguments
 * @example mergeCstyle(child, parent) - child overrides parent
 * @example mergeCstyle(a, b, c, d) - a overrides b, b overrides c, c overrides d
 */
export declare function mergeCstyle(...cstyles: CstyleInput[]): string;
export {};
//# sourceMappingURL=helpers.d.ts.map