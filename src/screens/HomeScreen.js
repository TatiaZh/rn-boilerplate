import DropdownAlert from 'common/DropdownAlert';
import { Button } from 'components';
import { Colors } from 'constants';
import React, { useEffect } from 'react';
import { Image, StyleSheet, View, ScrollView } from 'react-native';

export default function HomeScreen() {
	return (
		<View style={styles.container}>
			<ScrollView
				style={styles.container}
				contentContainerStyle={styles.contentContainer}
			>
				<View style={styles.welcomeContainer}>
					<Image
						source={require('assets/images/robot-dev.png')}
						style={styles.welcomeImage}
					/>

					<Button
						backgroundColor={Colors.white100}
						type="normal"
						size="large"
						text="OPEN ALERT"
						onPress={() => {
							DropdownAlert().show({
								type: 'success',
								message:
									'პაროლი წარმატებით შეიცვალა შეიცვალა შეიცვალა შეიცვალა',
								buttons: [
									{ text: 'ღილაკი', onPress: () => alert('button pressed') },
								],
							});
						}}
					/>
				</View>
			</ScrollView>
		</View>
	);
}

HomeScreen.navigationOptions = {
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
