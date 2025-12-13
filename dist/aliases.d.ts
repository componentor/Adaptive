/**
 * CSS property aliases for more concise syntax
 */
/**
 * Converts camelCase or PascalCase to kebab-case
 * @param str - The string to convert
 * @returns kebab-case string
 *
 * @example
 * toKebabCase('fontSize'); // Returns: 'font-size'
 * toKebabCase('BackgroundColor'); // Returns: 'background-color'
 * toKebabCase('borderTopLeftRadius'); // Returns: 'border-top-left-radius'
 */
export declare function toKebabCase(str: string): string;
/**
 * Built-in property aliases
 * These common aliases are available by default
 */
export declare const DEFAULT_ALIASES: Record<string, string>;
/**
 * Register a single custom alias
 *
 * @param alias - The short alias name
 * @param property - The full CSS property name
 *
 * @example
 * registerAlias('txt', 'color');
 * registerAlias('bgc', 'background-color');
 */
export declare function registerAlias(alias: string, property: string): void;
/**
 * Register multiple custom aliases at once
 *
 * @param aliases - Object mapping alias names to CSS properties
 *
 * @example
 * registerAliases({
 *   'txt': 'color',
 *   'bgc': 'background-color',
 *   'fw': 'font-weight'
 * });
 */
export declare function registerAliases(aliases: Record<string, string>): void;
/**
 * Clear all custom aliases
 */
export declare function clearCustomAliases(): void;
/**
 * Get all currently registered aliases (built-in + custom)
 * Custom aliases override built-in ones
 *
 * @returns Combined object of all aliases
 */
export declare function getAllAliases(): Record<string, string>;
/**
 * Resolve a property name, converting alias to full property if applicable.
 * Handles camelCase/PascalCase conversion to kebab-case.
 * Priority: custom aliases > built-in aliases > kebab-case conversion
 *
 * @param property - Property name (could be an alias, camelCase, or PascalCase)
 * @returns Full CSS property name in kebab-case
 *
 * @example
 * resolveProperty('bg'); // Returns: 'background'
 * resolveProperty('background'); // Returns: 'background'
 * resolveProperty('fontSize'); // Returns: 'font-size'
 * resolveProperty('BackgroundColor'); // Returns: 'background-color'
 */
export declare function resolveProperty(property: string): string;
/**
 * Check if a property name is a registered alias
 *
 * @param property - Property name to check
 * @returns True if it's a registered alias
 */
export declare function isAlias(property: string): boolean;
//# sourceMappingURL=aliases.d.ts.map