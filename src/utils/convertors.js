const hexToRgba = (hex, alpha = 1) => {
	const [r, g, b] = hex
		.match(hex.length <= 4 ? /\w/g : /\w\w/g)
		.map((x) => parseInt(x.length < 2 ? `${x}${x}` : x, 16));
	return `rgba(${r},${g},${b},${alpha})`;
};

const convertColor = (color, alpha) => {
	if (color.startsWith('rgba')) {
		return `${color.substring(0, color.lastIndexOf(','))},${alpha})`;
	}
	if (color.startsWith('rgb')) {
		return `rgba${color.substring(
			color.indexOf('('),
			color.lastIndexOf(',')
		)},${alpha})`;
	}
	if (color.startsWith('#')) {
		return hexToRgba(color, alpha);
	}
	return '';
};

export { hexToRgba, convertColor };
