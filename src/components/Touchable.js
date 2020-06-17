import PropTypes from 'prop-types';
import React from 'react';
import {
	TouchableNativeFeedback,
	TouchableHighlight,
	TouchableOpacity,
	View,
	ViewPropTypes,
	StyleSheet,
	Platform,
} from 'react-native';

const OUTER_STYLES = [
	{ key: 'margin', remove: true },
	{ key: 'marginHorizontal', remove: true },
	{ key: 'marginVertical', remove: true },
	{ key: 'marginBottom', remove: true },
	{ key: 'marginTop', remove: true },
	{ key: 'marginLeft', remove: true },
	{ key: 'marginRight', remove: true },
	{ key: 'borderRadius', remove: false },
	{ key: 'width', remove: false },
	{ key: 'height', remove: false },
	{ key: 'position', remove: true },
	{ key: 'top', remove: true },
	{ key: 'left', remove: true },
	{ key: 'right', remove: true },
	{ key: 'top', remove: true },
	{ key: 'bottom', remove: true },
	{ key: 'zIndex', remove: true },
	{ key: 'flex', remove: true },
];

export default function Touchable({
	style,
	children,
	onPress,
	disabled,
	rippleColor,
	underlayColor,
	activeOpacity,
	highlight,
	enablePointerEvents = false,
	useForeground = true,
}) {
	if (Platform.OS === 'android') {
		const flattenedStyle = StyleSheet.flatten(style);
		const outerStyle = {
			overflow: 'hidden',
		};

		if (style) {
			OUTER_STYLES.forEach(({ key, remove }) => {
				if (flattenedStyle[key] !== undefined) {
					outerStyle[key] = flattenedStyle[key];
					if (remove) delete flattenedStyle[key];
				}
			});
		}

		return (
			<View style={outerStyle}>
				<TouchableNativeFeedback
					useForeground={
						useForeground
							? TouchableNativeFeedback.canUseNativeForeground()
							: false
					}
					background={TouchableNativeFeedback.Ripple(rippleColor)}
					onPress={onPress}
					disabled={disabled}
				>
					<View
						style={flattenedStyle}
						pointerEvents={enablePointerEvents ? 'auto' : 'box-only'}
					>
						{children}
					</View>
				</TouchableNativeFeedback>
			</View>
		);
	}

	if (highlight) {
		return (
			<TouchableHighlight
				{...{ onPress, style, disabled, underlayColor }}
				activeOpacity={1}
			>
				<>{children}</>
			</TouchableHighlight>
		);
	}

	return (
		<TouchableOpacity
			{...{ onPress, style, underlayColor, activeOpacity, disabled }}
		>
			{children}
		</TouchableOpacity>
	);
}

Touchable.propTypes = {
	style: ViewPropTypes.style,
	children: PropTypes.node,
	onPress: PropTypes.func,
	disabled: PropTypes.bool,
	rippleColor: PropTypes.string,
	underlayColor: PropTypes.string,
	enablePointerEvents: PropTypes.bool,
	useForeground: PropTypes.bool,
};
