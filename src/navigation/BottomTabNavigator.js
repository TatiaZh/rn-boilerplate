import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabBarIcon } from 'components';
import { strings } from 'localization';
import React from 'react';
import { HomeScreen, Buttons, Inputs, Texts } from 'screens';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
	navigation.setOptions({ headerTitle: getHeaderTitle(route) });

	return (
		<BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
			<BottomTab.Screen
				name="Home"
				component={HomeScreen}
				options={{
					title: strings('home'),
					tabBarIcon: ({ focused }) => (
						<TabBarIcon focused={focused} name="md-code-working" />
					),
				}}
			/>
			<BottomTab.Screen
				name="Buttons"
				component={Buttons}
				options={{
					title: 'Buttons',
					tabBarIcon: ({ focused }) => (
						<TabBarIcon focused={focused} name="md-apps" />
					),
				}}
			/>
			<BottomTab.Screen
				name="Inputs"
				component={Inputs}
				options={{
					title: 'Inputs',
					tabBarIcon: ({ focused }) => (
						<TabBarIcon focused={focused} name="ios-apps" />
					),
				}}
			/>
			<BottomTab.Screen
				name="Texts"
				component={Texts}
				options={{
					title: 'Texts',
					tabBarIcon: ({ focused }) => (
						<TabBarIcon focused={focused} name="md-text" />
					),
				}}
			/>
		</BottomTab.Navigator>
	);
}

function getHeaderTitle(route) {
	const routeName =
		route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

	switch (routeName) {
		case 'Home':
			return 'Home Header';
		case 'Buttons':
			return 'Buttons Header';
	}
}
