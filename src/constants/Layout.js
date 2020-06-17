import { Dimensions } from 'react-native';
import {
	getStatusBarHeight,
	getBottomSpace,
} from 'react-native-iphone-x-helper';

const { width, height } = Dimensions.get('window');

export default {
	SAFE_SPACE_TOP: getStatusBarHeight(),
	SAFE_SPACE_BOTTOM: getBottomSpace(),
	DEVICE_WIDTH: width,
	DEVICE_HEIGHT: height,
	isSmallDevice: width < 375,
};
