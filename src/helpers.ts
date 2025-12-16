/**
 * Normalizes cstyle input to a string format
 */
export function normalizeCstyle(cstyle: string | object | any[] | null | undefined): string {
	if (!cstyle) return '';
	if (typeof cstyle === 'string') return cstyle;
	if (Array.isArray(cstyle)) {
		return cstyle.map(item => {
			if (typeof item === 'string') return item;
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
 * Merges parent and child cstyle strings
 * Child properties override parent properties
 * Properties not specified in child are inherited from parent
 */
export function mergeCstyle(
	parentCstyle: string | object | any[] | null | undefined,
	childCstyle: string | object | any[] | null | undefined
): string {
	// If no parent, just return normalized child
	if (!parentCstyle) return normalizeCstyle(childCstyle);
	// If no child, just return normalized parent
	if (!childCstyle) return normalizeCstyle(parentCstyle);

	// Normalize both to strings
	const parentStr = normalizeCstyle(parentCstyle);
	const childStr = normalizeCstyle(childCstyle);

	// Parse parent into a map
	const styleMap: Record<string, string> = {};
	parentStr.split(';').forEach(prop => {
		const trimmed = prop.trim();
		if (trimmed) {
			const colonIndex = trimmed.indexOf(':');
			if (colonIndex > -1) {
				const key = trimmed.substring(0, colonIndex).trim();
				const value = trimmed.substring(colonIndex + 1).trim();
				if (key) styleMap[key] = value;
			}
		}
	});

	// Merge child properties (overrides parent)
	childStr.split(';').forEach(prop => {
		const trimmed = prop.trim();
		if (trimmed) {
			const colonIndex = trimmed.indexOf(':');
			if (colonIndex > -1) {
				const key = trimmed.substring(0, colonIndex).trim();
				const value = trimmed.substring(colonIndex + 1).trim();
				if (key) styleMap[key] = value;
			}
		}
	});

	// Convert back to string
	return Object.entries(styleMap)
		.map(([key, value]) => `${key}:${value}`)
		.join(';');
}
