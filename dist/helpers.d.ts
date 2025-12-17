/**
 * Normalizes adapt input to a string format
 */
export declare function normalizeAdapt(adapt: string | object | any[] | null | undefined): string;
type AdaptInput = string | object | any[] | null | undefined;
/**
 * Merges multiple adapt inputs
 * Left arguments override right arguments
 * @example mergeAdapt(child, parent) - child overrides parent
 * @example mergeAdapt(a, b, c, d) - a overrides b, b overrides c, c overrides d
 */
export declare function mergeAdapt(...adapts: AdaptInput[]): string;
export {};
//# sourceMappingURL=helpers.d.ts.map