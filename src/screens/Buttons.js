import { Button } from 'components';
import { Colors } from 'constants';
import * as React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

export default function Buttons() {
	return (
		<View style={styles.container}>
			<ScrollView
				style={styles.container}
				contentContainerStyle={styles.contentContainer}
			>
				<View style={styles.column}>
					<Button
						backgroundColor={Colors.negative100}
						type="light"
						size="small"
						icon="md-home"
						onPress={() => {}}
					/>
					<Button
						backgroundColor={Colors.negative100}
						type="normal"
						size="small"
						iconLeft="md-home"
						iconRight="md-home"
						text="B"
						onPress={() => {}}
					/>

					<Button
						backgroundColor={Colors.warning100}
						type="normal"
						disabled
						size="small"
						text="BUTTON"
						onPress={() => {}}
					/>

					<Button
						backgroundColor={Colors.success100}
						type="light"
						size="medium"
						text="BUTTON"
						onPress={() => {}}
					/>
					<Button
						backgroundColor={Colors.secondary100}
						type="light"
						disabled
						size="medium"
						text="BUTTON"
						onPress={() => {}}
					/>

					<Button
						backgroundColor={Colors.secondary100}
						type="light"
						size="medium"
						text="BUTTON"
						iconLeft="md-home"
						onPress={() => {}}
					/>
				</View>
				<View style={styles.column}>
					<Button
						backgroundColor={Colors.primary100}
						type="light"
						size="large"
						text="BUTTON"
						onPress={() => {}}
					/>
					<Button
						backgroundColor={Colors.primary100}
						type="normal"
						size="large"
						text="BUTTON"
						onPress={() => {}}
					/>
					<Button
						backgroundColor={Colors.success100}
						type="normal"
						size="medium"
						text="BUTTON"
						onPress={() => {}}
						loading
					/>
					<Button
						backgroundColor={Colors.black100}
						type="normal"
						size="large"
						text="BUTTON"
						onPress={() => {}}
					/>
					<Button
						backgroundColor={Colors.white100}
						type="normal"
						size="large"
						text="BUTTON"
						onPress={() => {}}
					/>
					<Button
						backgroundColor={Colors.black92}
						type="transparent"
						iconLeft="md-home"
						size="large"
						text="BUTTON"
						onPress={() => {}}
						textStyle={{ fontSize: 18 }}
						textColor={Colors.tintColor}
					/>
				</View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.bg2,
	},

	contentContainer: {
		paddingTop: 30,
		justifyContent: 'space-evenly',
		alignItems: 'center',
		flexGrow: 1,
		flexDirection: 'row',
	},
	column: {
		height: '100%',
		justifyContent: 'space-evenly',
		alignItems: 'center',
	},
});
