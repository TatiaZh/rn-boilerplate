import { Colors } from 'constants';
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import TextInput from './TextInput';

export default function PasswordInput(props) {
	const [password, setPassword] = useState('');
	const [hidePassword, setHidePassword] = useState(false);

	function onChangeText(newValue) {
		setPassword(newValue);
	}

	let strength = '40%';

	return (
		<View style={props.style}>
			<TextInput
				style={styles.passwordInput}
				secureTextEntry
				onChangeText={onChangeText}
				iconRight="md-eye"
				onRightPress={() => {
					setHidePassword(!hidePassword);
				}}
			/>
			<View style={styles.strengthIndicator}>
				<View style={[styles.strengthIndicatorFilled, { width: strength }]} />
			</View>
			<View style={styles.enteredPassword}>
				{!hidePassword && (
					<View style={styles.passwordValueWrapper}>
						<Text
							style={styles.passwordValue}
							numberOfLines={1}
							ellipsizeMode="head"
						>
							{password}
						</Text>
					</View>
				)}
				<Text style={styles.strength}>STRENGTH</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	passwordInput: {
		borderBottomLeftRadius: 0,
		borderBottomRightRadius: 0,
		borderBottomWidth: 0,
	},

	strengthIndicator: {
		width: '100%',
		height: 2,
		backgroundColor: Colors.black4,
	},

	strengthIndicatorFilled: {
		height: '100%',
		backgroundColor: Colors.success100,
	},

	enteredPassword: {
		height: 24,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderWidth: 1,
		borderColor: Colors.darkGrey4,
		borderBottomLeftRadius: 6,
		borderBottomRightRadius: 6,
		borderTopWidth: 0,
		paddingLeft: 16,
		paddingRight: 16,
	},

	passwordValueWrapper: {
		flex: 1,
		overflow: 'hidden',
		paddingRight: 10,
	},

	passwordValue: {
		color: Colors.component32,
		fontSize: 12,
	},

	strength: {
		color: Colors.success100,
		fontSize: 10,
		marginLeft: 'auto',
	},
});
