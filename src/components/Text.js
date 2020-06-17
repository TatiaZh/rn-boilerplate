import { Colors } from 'constants';
import PropTypes from 'prop-types';
import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';

export default function Text({
	weight,
	type,
	align,
	style,
	children,
	...props
}) {
	let flattenedStyle = StyleSheet.flatten(style);
	if (flattenedStyle && flattenedStyle.fontSize && !flattenedStyle.lineHeight)
		flattenedStyle.lineHeight = flattenedStyle.fontSize;
	return (
		<RNText
			style={[
				styles.default,
				styles[type],
				styles[weight],
				styles[align],
				flattenedStyle,
			]}
			{...props}
		>
			{children}
		</RNText>
	);
}

Text.propTypes = {
	weight: PropTypes.oneOf(['bold', 'medium', 'light']),
	type: PropTypes.oneOf([
		'h1',
		'h2',
		'h3',
		'h4',
		'h5',
		'h6',
		's1',
		's2',
		'b1',
		'b2',
		'button',
		'caption',
		'overline',
	]),
	align: PropTypes.oneOf(['left', 'right', 'center']),
	style: RNText.propTypes.style,
	children: PropTypes.node,
};

const styles = StyleSheet.create({
	default: {
		fontFamily: 'roman',
		fontSize: 14,
		lineHeight: 20,
		color: Colors.component100,
	},
	bold: { fontFamily: 'bold' },
	medium: { fontFamily: 'medium' },
	light: { fontFamily: 'roman' },
	left: { textAlign: 'left' },
	right: { textAlign: 'right' },
	center: { textAlign: 'center' },

	h1: {
		textTransform: 'uppercase',
		fontFamily: 'bold',
		fontSize: 96,
		lineHeight: 96,
		letterSpacing: -1.5,
	},
	h2: {
		textTransform: 'uppercase',
		fontFamily: 'bold',
		fontSize: 60,
		lineHeight: 60,
		letterSpacing: -0.5,
	},
	h3: {
		textTransform: 'uppercase',
		fontFamily: 'bold',
		fontSize: 48,
		lineHeight: 48,
	},
	h4: {
		textTransform: 'uppercase',
		fontFamily: 'bold',
		fontSize: 34,
		lineHeight: 34,
		letterSpacing: 0.25,
	},
	h5: {
		textTransform: 'uppercase',
		fontFamily: 'bold',
		fontSize: 24,
		lineHeight: 24,
	},
	h6: {
		textTransform: 'uppercase',
		fontFamily: 'bold',
		fontSize: 20,
		lineHeight: 20,
		letterSpacing: 0.15,
	},
	s1: {
		textTransform: 'uppercase',
		fontFamily: 'medium',
		fontSize: 16,
		lineHeight: 16,
	},
	s2: {
		textTransform: 'uppercase',
		fontFamily: 'medium',
		fontSize: 14,
		lineHeight: 14,
	},
	b1: {
		fontFamily: 'roman',
		fontSize: 16,
		lineHeight: 28,
	},
	b2: {
		fontFamily: 'roman',
		fontSize: 14,
		lineHeight: 20,
	},
	button: {
		fontFamily: 'bold',
		textTransform: 'uppercase',
		fontSize: 14,
	},
	caption: {
		fontFamily: 'roman',
		fontSize: 12,
		lineHeight: 16,
	},
	overline: {
		fontFamily: 'medium',
		textTransform: 'uppercase',
		fontSize: 10,
		lineHeight: 16,
	},
});
