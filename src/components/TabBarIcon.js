import { Ionicons } from '@expo/vector-icons';
import { Colors } from 'constants';
import * as React from 'react';

export default function TabBarIcon(props) {
	return (
		<Ionicons
			name={props.name}
			size={30}
			style={{ marginBottom: -3 }}
			color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
		/>
	);
}
