module.exports = function (api) {
	api.cache(true);
	return {
		presets: ['babel-preset-expo', 'module:react-native-dotenv'],
		plugins: [
			[
				'module-resolver',
				{
					root: ['./src'],
					alias: {
						api: './src/api',
						components: './src/components',
						constants: './src/constants',
						hooks: './src/hooks',
						localization: './src/localization',
						navigation: './src/navigation',
						screens: './src/screens',
						services: './src/services',
						stores: './src/stores',
						utils: './src/utils',
						assets: './assets',
					},
				},
			],
		],
	};
};
