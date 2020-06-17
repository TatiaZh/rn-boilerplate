import { Ionicons } from '@expo/vector-icons';
import { Colors } from 'constants';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import {
	View,
	TextInput as TextInput_RN,
	StyleSheet,
	Animated,
	TouchableOpacity,
} from 'react-native';

const iconSize = 26;

export default function TextInput(props) {
	let { containerStyle, iconRight, iconLeft, ...inputProps } = props;

	const [value, setValue] = useState('');
	const [focusAnim] = useState(new Animated.Value(0));

	// Display label on top if the value is already present
	useEffect(() => {
		if (props.value) {
			focusAnim.setValue(1);
			setValue(props.value);
		}
	}, []);

	function onChangeText(newValue) {
		setValue(newValue);

		if (typeof props.onChangeText === 'function') {
			props.onChangeText(newValue);
		}
	}

	function onFocus() {
		// Animate label on input focus
		Animated.timing(focusAnim, {
			toValue: 1,
			duration: 200,
		}).start();

		if (typeof props.onFocus === 'function') {
			props.onFocus();
		}
	}

	function onBlur() {
		// Return label to the original position if the input is empty
		if (value.length === 0) {
			Animated.timing(focusAnim, {
				toValue: 0,
				duration: 200,
			}).start();
		}

		if (typeof props.onBlur === 'function') {
			props.onBlur();
		}
	}

	// Hide label if the placeholder prop is passed as well
	let showLabel = props.label && !props.placeholder;

	// Animate top position and font size of the label
	let labelAnimStyles = {
		transform: [
			{
				translateY: focusAnim.interpolate({
					inputRange: [0, 1],
					outputRange: [0, -13],
				}),
			},
		],
		fontSize: focusAnim.interpolate({
			inputRange: [0, 1],
			outputRange: [16, 12],
		}),
	};

	let inputStyles = [styles.input];
	if (iconRight) {
		inputStyles.push(styles.inputWithIconRight);
	}

	if (iconLeft) {
		inputStyles.push(styles.inputWithIconLeft);
	}

	if (props.error) {
		inputStyles.push(styles.inputWithError);
	}

	if (showLabel) {
		inputStyles.push(styles.inputWithLabel);
	}

	// Right icon will be wrapper in `TouchableOpacity` only if the callback is passed
	const iconRightEl = (
		<Ionicons
			name={iconRight}
			size={iconSize}
			style={styles.iconRight}
			color={Colors.component32}
		/>
	);

	return (
		<View style={[styles.container, containerStyle]}>
			{// Input label
			showLabel && (
				<View style={styles.labelWrapper}>
					<Animated.Text style={[styles.label, labelAnimStyles]}>
						{props.label}
					</Animated.Text>
				</View>
			)}
			{// Left icon
			iconLeft && (
				<Ionicons
					name={iconLeft}
					size={iconSize}
					style={styles.iconLeft}
					color={Colors.component100}
				/>
			)}
			<TextInput_RN
				onChangeText={onChangeText}
				onFocus={onFocus}
				onBlur={onBlur}
				{...inputProps}
				style={[inputStyles, props.style]}
			/>
			{// Right icon
			iconRight &&
				(props.onRightPress ? (
					<TouchableOpacity
						activeOpacity={0.7}
						style={styles.iconRightWrapper}
						onPress={props.onRightPress}
					>
						{iconRightEl}
					</TouchableOpacity>
				) : (
					iconRightEl
				))}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		overflow: 'hidden',
	},

	input: {
		height: 60,
		borderColor: Colors.darkGrey4,
		borderWidth: 1,
		borderRadius: 6,
		paddingLeft: 16,
		paddingRight: 16,
		fontSize: 16,
		color: Colors.component100,
	},

	inputWithLabel: {
		paddingTop: 16,
	},

	inputWithIconRight: {
		paddingRight: 40,
	},

	inputWithIconLeft: {
		paddingLeft: 40,
	},

	inputWithError: {
		borderColor: Colors.negative100,
	},

	labelWrapper: {
		position: 'absolute',
		left: 16,
		top: 0,
		right: 0,
		bottom: 0,
		justifyContent: 'center',
	},

	label: {
		position: 'relative',
		color: Colors.component32,
		fontSize: 16,
	},

	labelActive: {
		top: 8,
		fontSize: 12,
	},

	iconRightWrapper: {
		position: 'absolute',
		right: 0,
		top: 0,
		bottom: 0,
	},

	iconRight: {
		position: 'absolute',
		right: 20,
		top: '50%',
		marginTop: -iconSize / 2,
	},

	iconLeft: {
		position: 'absolute',
		left: 11,
		top: '50%',
		marginTop: -iconSize / 2,
	},
});

TextInput.propTypes = {
	label: PropTypes.string,
	iconRight: PropTypes.string,
	iconLeft: PropTypes.string,
	onRightPress: PropTypes.func,
	error: PropTypes.bool,
};
