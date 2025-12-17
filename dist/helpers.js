/**
 * Normalizes adapt input to a string format
 */
export function normalizeAdapt(adapt) {
    if (!adapt)
        return '';
    if (typeof adapt === 'string')
        return adapt;
    if (Array.isArray(adapt)) {
        return adapt.map(item => {
            if (typeof item === 'string')
                return item;
            return Object.entries(item)
                .map(([key, value]) => `${key}:${value}`)
                .join('; ');
        }).join('; ');
    }
    return Object.entries(adapt)
        .map(([key, value]) => `${key}:${value}`)
        .join('; ');
}
/**
 * Merges multiple adapt inputs
 * Left arguments override right arguments
 * @example mergeAdapt(child, parent) - child overrides parent
 * @example mergeAdapt(a, b, c, d) - a overrides b, b overrides c, c overrides d
 */
export function mergeAdapt(...adapts) {
    if (adapts.length === 0)
        return '';
    if (adapts.length === 1)
        return normalizeAdapt(adapts[0]);
    const styleMap = {};
    // Process right-to-left so left args override right args
    for (let i = adapts.length - 1; i >= 0; i--) {
        const normalized = normalizeAdapt(adapts[i]);
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