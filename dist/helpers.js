/**
 * Normalizes cstyle input to a string format
 */
export function normalizeCstyle(cstyle) {
    if (!cstyle)
        return '';
    if (typeof cstyle === 'string')
        return cstyle;
    if (Array.isArray(cstyle)) {
        return cstyle.map(item => {
            if (typeof item === 'string')
                return item;
            return Object.entries(item)
                .map(([key, value]) => `${key}:${value}`)
                .join('; ');
        }).join('; ');
    }
    return Object.entries(cstyle)
        .map(([key, value]) => `${key}:${value}`)
        .join('; ');
}
/**
 * Merges multiple cstyle inputs
 * Left arguments override right arguments
 * @example mergeCstyle(child, parent) - child overrides parent
 * @example mergeCstyle(a, b, c, d) - a overrides b, b overrides c, c overrides d
 */
export function mergeCstyle(...cstyles) {
    if (cstyles.length === 0)
        return '';
    if (cstyles.length === 1)
        return normalizeCstyle(cstyles[0]);
    const styleMap = {};
    // Process right-to-left so left args override right args
    for (let i = cstyles.length - 1; i >= 0; i--) {
        const normalized = normalizeCstyle(cstyles[i]);
        if (!normalized)
            continue;
        normalized.split(';').forEach(prop => {
            const trimmed = prop.trim();
            if (trimmed) {
                const colonIndex = trimmed.indexOf(':');
                if (colonIndex > -1) {
                    const key = trimmed.substring(0, colonIndex).trim();
                    const value = trimmed.substring(colonIndex + 1).trim();
                    if (key)
                        styleMap[key] = value;
                }
            }
        });
    }
    return Object.entries(styleMap)
        .map(([key, value]) => `${key}:${value}`)
        .join(';');
}
//# sourceMappingURL=helpers.js.map