import { StyleSheet } from 'react-native';

import Layout from './Layout';

export default StyleSheet.create({
	fill: {
		flex: 1,
	},
	centerFill: { flex: 1, alignItems: 'center', justifyContent: 'center' },
	deviceFill: {
		width: Layout.DEVICE_WIDTH,
		height: Layout.DEVICE_HEIGHT,
	},
	centerAlignment: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	row: {
		flexDirection: 'row',
	},
	rowBetween: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
});
