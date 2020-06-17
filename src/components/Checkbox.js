import { Ionicons } from '@expo/vector-icons';
import { Colors } from 'constants';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { stylesList } from 'utils';

export default function Checkbox(props) {
	const [checked, setChecked] = useState(false);

	useEffect(() => {
		if (props.checked) {
			setChecked(props.checked);
		}
	}, []);

	function onPress() {
		setChecked(!checked);

		if (typeof props.onPress === 'function') {
			props.onPress();
		}

		if (typeof props.onChange === 'function') {
			props.onChange(checked);
		}
	}

	// Dynamically generate styles for checkbox view
	let checkboxStyles = stylesList(styles, [
		'checkbox',
		{
			checkboxInactive: !checked,
			checkboxSmall: props.size === 'small',
		},
	]);

	let labelStyles = stylesList(styles, [
		'label',
		{
			labelInactive: !checked,
		},
	]);

	return (
		<TouchableOpacity onPress={onPress} activeOpacity={0.9}>
			<View style={styles.checkboxWrapper}>
				<View style={checkboxStyles}>
					{checked && (
						<Ionicons
							name="md-checkmark"
							size={15}
							style={styles.checkIcon}
							color={Colors.white100}
						/>
					)}
				</View>
				{props.label && (
					<Text style={[labelStyles, props.labelStyle]}>{props.label}</Text>
				)}
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	checkboxWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
	},

	checkbox: {
		width: 24,
		height: 24,
		borderRadius: 8,
		backgroundColor: Colors.primary100,
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: 2,
	},

	checkboxSmall: {
		width: 18,
		height: 18,
	},

	checkboxInactive: {
		backgroundColor: Colors.primary8,
	},

	label: {
		fontSize: 14,
		color: Colors.component100,
		marginLeft: 4,
	},

	labelInactive: {
		color: Colors.component68,
	},
});

Checkbox.propTypes = {
	checked: PropTypes.bool,
	onChange: PropTypes.func,
	size: PropTypes.oneOf(['small']),
	label: PropTypes.string,
	labelStyle: PropTypes.object,
};
