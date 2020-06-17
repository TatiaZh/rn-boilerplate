// Forked from https://github.com/JedWatson/classnames/blob/master/index.js

const hasOwn = {}.hasOwnProperty;

export default function stylesList(styles, args) {
	const classes = [];

	for (let i = 0; i < args.length; i++) {
		const arg = args[i];
		if (!arg) continue;

		const argType = typeof arg;

		if (argType === 'string' || argType === 'number') {
			classes.push(arg);
		} else if (argType === 'object') {
			if (arg.toString !== Object.prototype.toString) {
				classes.push(arg.toString());
			} else {
				for (const key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}
	}

	return classes.map((item) => styles[item]);
}
