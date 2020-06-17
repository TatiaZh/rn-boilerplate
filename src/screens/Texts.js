import { Text } from 'components';
import { Colors } from 'constants';
import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

export default function Texts() {
	return (
		<View style={styles.container}>
			<ScrollView
				style={styles.container}
				contentContainerStyle={styles.contentContainer}
			>
				<Text type="h1">h1 ჰდ</Text>
				<Text type="h2">h2 head ჰდ</Text>
				<Text type="h3">h3 headline ჰდ</Text>
				<Text type="h4">h4 headline ჰდ</Text>
				<Text type="h5">h5 headline ჰდ</Text>
				<Text type="h6">h6 headline ჰდ</Text>
				<Text type="s1">Subtitle 1 ქს</Text>
				<Text type="s2">Subtitle 2 ქს</Text>
				<Text type="b1">Body 1 ტნ</Text>
				<Text type="b2">Body 2 ტნ</Text>
				<Text type="button">Button ღი</Text>
				<Text type="caption">Caption აღ</Text>
				<Text type="overline">Overline ხზ</Text>
				<Text type="b2" align="center" weight="bold">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad at
					consectetur cum dolore dolorem doloribus hic id illo ipsum labore
					minima, molestiae obcaecati perferendis praesentium quae quas, quod,
					sequi ullam?
				</Text>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.white100,
	},

	contentContainer: {
		paddingTop: 30,
		justifyContent: 'space-evenly',
		alignItems: 'center',
		flexGrow: 1,
	},
});
