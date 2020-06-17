import { Ionicons } from '@expo/vector-icons';
import Loader from 'components/Loader';
import Touchable from 'components/Touchable';
import { Colors, Styles } from 'constants';
import PropTypes from 'prop-types';
import React from 'react';
import { View, ViewPropTypes, StyleSheet } from 'react-native';
import { convertColor } from 'utils';

import Text from './Text';

const bck = 'primary';

const getColors = (bgColor, textColor, type) => {
	let labelColor =
		textColor ||
		(type === 'light' ? convertColor(bgColor, 1) : Colors.white100);

	if (
		convertColor(bgColor, 1).includes('rgba(255,255,255') &&
		type !== 'light' &&
		!textColor
	)
		labelColor = Colors.black100;

	if (convertColor(bgColor, 1).includes('rgba(0,0,0') && !textColor)
		labelColor = Colors.white100;

	if (type === 'transparent')
		return {
			bckColor: Colors.transparent,
			underlayColor: Colors.transparent,
			rippleColor: Colors.transparent,
			labelColor,
		};

	if (type === 'light')
		return {
			bckColor: convertColor(bgColor, 0.08),
			underlayColor: convertColor(bgColor, 0.16),
			rippleColor: convertColor(bgColor, 0.16),
			labelColor,
		};

	return {
		bckColor: convertColor(bgColor, 1),
		underlayColor: convertColor(bgColor, 0.92),
		rippleColor: Colors.white8,
		labelColor,
	};
};

export default function Button({
	style,
	textStyle,
	textColor,
	backgroundColor = bck,
	type,
	size,
	iconSize,
	icon,
	iconLeft,
	iconRight,
	text,
	renderContent,
	disabled,
	onPress,
	enablePointerEvents,
	loading,
}) {
	const { bckColor, underlayColor, rippleColor, labelColor } = getColors(
		backgroundColor,
		textColor,
		type
	);

	const iconSizes = { small: 16, medium: 20, large: 20 };

	const containerStyle = [
		styles.container,
		type !== 'transparent' && styles[size],
		style,
		disabled && styles.disabled,
		{ backgroundColor: bckColor },
	];

	const labelStyle = [
		styles.label,
		textStyle,
		disabled && styles.disabled,
		{ color: labelColor },
	];

	return (
		<Touchable
			style={containerStyle}
			highlight
			useForeground={false}
			disabled={disabled || loading}
			{...{
				underlayColor,
				rippleColor,
				onPress,
				enablePointerEvents,
			}}
		>
			{!!iconLeft && (
				<Ionicons
					name={iconLeft}
					size={iconSize || iconSizes[size]}
					style={styles[`iconLeft_${size}`]}
					color={labelColor}
				/>
			)}
			{!!text && (
				<Text type="button" style={labelStyle}>
					{text}
				</Text>
			)}
			{renderContent && renderContent()}
			{!!icon && !iconRight && !iconLeft && !text && (
				<Ionicons
					name={icon}
					size={iconSize || iconSizes[size]}
					color={labelColor}
				/>
			)}
			{!!iconRight && (
				<Ionicons
					name={iconRight}
					size={iconSize || iconSizes[size]}
					style={styles[`iconRight_${size}`]}
					color={labelColor}
				/>
			)}
			{loading && (
				<View style={[containerStyle, styles.loader]}>
					<Loader color={labelColor} />
				</View>
			)}
		</Touchable>
	);
}

Button.propTypes = {
	style: ViewPropTypes.style,
	textStyle: Text.propTypes.style,
	backgroundColor: PropTypes.string, //rgb, rgba, #rgb, #rrggbb
	textColor: PropTypes.string,
	type: PropTypes.oneOf(['normal', 'light', 'transparent']).isRequired,
	size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
	iconSize: PropTypes.number,
	icon: PropTypes.string,
	iconLeft: PropTypes.string,
	iconRight: PropTypes.string,
	text: PropTypes.string,
	renderContent: PropTypes.func,
	disabled: PropTypes.bool,
	onPress: PropTypes.func,
	enablePointerEvents: PropTypes.bool,
	loading: PropTypes.bool,
};

const styles = StyleSheet.create({
	container: {
		...Styles.centerAlignment,
		flexDirection: 'row',
		overflow: 'hidden',
	},
	small: {
		paddingHorizontal: 8,
		height: 32,
		borderRadius: 10,
		minWidth: 32,
	},
	medium: {
		paddingHorizontal: 12,
		height: 44,
		borderRadius: 14,
		minWidth: 44,
	},
	large: {
		paddingHorizontal: 18,
		height: 56,
		borderRadius: 18,
		minWidth: 56,
	},
	label: {
		fontSize: 14,
		color: Colors.white100,
		fontWeight: 'bold',
	},
	disabled: {
		opacity: 0.4,
	},
	iconLeft_small: {
		marginRight: 4,
	},
	iconRight_small: {
		marginLeft: 4,
	},
	iconLeft_medium: {
		marginRight: 8,
	},
	iconRight_medium: {
		marginLeft: 8,
	},
	iconLeft_large: {
		marginRight: 4,
	},
	iconRight_large: {
		marginLeft: 4,
	},
	loader: {
		...Styles.centerAlignment,
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
	},
});
