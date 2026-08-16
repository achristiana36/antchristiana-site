const base = import.meta.env.BASE_URL.endsWith('/')
	? import.meta.env.BASE_URL
	: `${import.meta.env.BASE_URL}/`;

export function sitePath(path = '') {
	if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;
	return `${base}${path.replace(/^\/+/, '')}`;
}

export function mediaPath(path?: string) {
	if (!path) return '';
	return sitePath(path);
}
