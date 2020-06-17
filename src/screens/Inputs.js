import { PasswordInput, TextInput } from 'components';
import { Colors } from 'constants';
import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

export default function Inputs() {
	return (
		<View style={styles.container}>
			<ScrollView
				style={styles.container}
				contentContainerStyle={styles.contentContainer}
			>
				<View style={styles.welcomeContainer}>
					<TextInput
						label="This is a label"
						containerStyle={{
							width: 250,
							marginBottom: 20,
						}}
						iconRight="md-home"
					/>

					<TextInput
						placeholder="Search input"
						style={{
							height: 44,
							borderRadius: 14,
						}}
						containerStyle={{
							width: 250,
							marginBottom: 20,
						}}
						iconLeft="md-search"
					/>

					<TextInput
						label="input filled without icon"
						value="lorem ipsum"
						containerStyle={{
							width: 250,
							marginBottom: 20,
						}}
					/>

					<TextInput
						label="This is a password"
						iconRight="md-lock"
						containerStyle={{
							width: 250,
							marginBottom: 20,
						}}
						secureTextEntry
					/>

					<TextInput
						label="input with error"
						error
						containerStyle={{
							width: 250,
							marginBottom: 20,
						}}
					/>

					<TextInput
						placeholder="_"
						containerStyle={{
							marginBottom: 20,
						}}
						secureTextEntry
						style={{
							height: 56,
							width: 56,
							borderRadius: 18,
							textAlign: 'center',
							letterSpacing: 0,
						}}
						maxLength={1}
						caretHidden
					/>

					<PasswordInput style={{ width: 250 }} />
				</View>
			</ScrollView>
		</View>
	);
}

Inputs.navigationOptions = {
	header: null,
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	developmentModeText: {
		marginBottom: 20,
		color: 'rgba(0,0,0,0.4)',
		fontSize: 14,
		lineHeight: 19,
		textAlign: 'center',
	},
	contentContainer: {
		paddingTop: 30,
		justifyContent: 'center',
		alignItems: 'center',
		flexGrow: 1,
	},
	welcomeContainer: {
		alignItems: 'center',
		marginTop: 10,
		marginBottom: 20,
	},
	welcomeImage: {
		width: 100,
		height: 80,
		resizeMode: 'contain',
		marginTop: 3,
		marginLeft: -10,
	},
	text: {
		fontSize: 20,
		color: Colors.tintColor,
	},
});
