import { Button } from 'components';
import { Colors } from 'constants';
import React, { useRef, useImperativeHandle } from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import RNDropdownAlert from 'react-native-dropdownalert';

import Icon from './Icon';
import Text from './Text';

let DropdownAlert = (props, ref) => {
	const alertRef = useRef();

	useImperativeHandle(ref, () => ({
		show: ({ type, message, buttons }) => {
			alertRef.current.alertWithType(type, message, '', { buttons });
		},
	}));

	function renderIcon(alertType) {
		const types = ['success', 'error', 'warn'];
		const icons = ['Checkmark', 'Close', 'Warning'];

		return (
			<View style={styles.imageContainer}>
				<Icon
					name={icons[types.indexOf(alertType)]}
					size={28}
					style={styles.icon}
					color={Colors.white100}
				/>
			</View>
		);
	}

	function renderText(text) {
		return <Text style={styles.text}>{text}</Text>;
	}

	function renderBelowMessage(buttons) {
		if (!buttons) {
			return null;
		}

		return (
			<View style={styles.buttonsWrapper}>
				{buttons.map((button) => (
					<Button
						style={styles.button}
						type="transparent"
						text={button.text}
						onPress={button.onPress}
						textStyle={{ fontSize: 14 }}
						textColor={Colors.white100}
					/>
				))}
			</View>
		);
	}

	return (
		<RNDropdownAlert
			ref={alertRef}
			defaultContainer={styles.defaultContainer}
			containerStyle={styles.container}
			wrapperStyle={styles.wrapper}
			renderImage={(passedProps, alertData) => renderIcon(alertData.type)}
			renderTitle={(passedProps, alertData) => renderText(alertData.title)}
			renderMessage={(passedProps, alertData) =>
				renderBelowMessage(alertData.payload.buttons)
			}
			defaultTextContainer={styles.defaultTextContainer}
			successColor={Colors.success100}
			errorColor={Colors.negative100}
			warnColor={Colors.warning100}
			closeInterval={4000}
		/>
	);
};

const styles = StyleSheet.create({
	defaultContainer: {
		borderBottomLeftRadius: 24,
		borderBottomRightRadius: 24,
		paddingLeft: 24,
		paddingRight: 50,
		paddingTop: Platform.select({
			ios: 20 + 44,
			android: 44,
		}),
		paddingBottom: 15,
	},

	container: {
		paddingTop: 44,
		paddingLeft: 0,
	},

	wrapper: {
		paddingLeft: 0,
	},

	defaultTextContainer: {
		padding: 0,
		paddingRight: 50,
	},

	imageContainer: {
		backgroundColor: Colors.white8,
		width: 56,
		height: 56,
		borderRadius: 18,
		marginRight: 16,
		alignItems: 'center',
		justifyContent: 'center',
	},

	text: {
		color: Colors.white100,
		marginBottom: 16,
	},

	buttonsWrapper: {
		marginTop: -5,
		alignItems: 'flex-start',
	},

	button: {
		padding: 10,
		marginLeft: -10,
	},
});

DropdownAlert = React.forwardRef(DropdownAlert);

export default DropdownAlert;
