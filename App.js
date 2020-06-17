import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { setDropdownRefValue } from 'common/DropdownAlert';
import DropdownAlert from 'components/DropdownAlert';
import { Layout } from 'constants';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { getLanguage, setLocale } from 'localization';
import { BottomTabNavigator, useLinking } from 'navigation';
import { Provider } from 'outstated';
import React, { useState, useEffect, useRef } from 'react';
import { View } from 'react-native';
import { globalStore } from 'stores';

console.disableYellowBox = true;

const Stack = createStackNavigator();

export default function App(props) {
	const [isLoadingComplete, setLoadingComplete] = useState(false);
	const [initialNavigationState, setInitialNavigationState] = useState();
	const [windowHeight, setWindowHeight] = useState(0);
	const containerRef = useRef();
	const { getInitialState } = useLinking(containerRef);

	useEffect(() => {
		async function loadResourcesAndDataAsync() {
			try {
				SplashScreen.preventAutoHide();
				setInitialNavigationState(await getInitialState());
				//fonts load here
				// await Font.loadAsync({
				//
				// });
				await saveLanguage();
			} catch (e) {
				console.warn(e);
			} finally {
				setLoadingComplete(true);
				SplashScreen.hide();
			}
		}

		loadResourcesAndDataAsync();
	}, []);

	const saveLanguage = async () => {
		const lang = await getLanguage();
		await setLocale(lang);
	};

	const getWindowHeight = ({ nativeEvent }) => {
		const { height } = nativeEvent.layout;
		Layout.DEVICE_HEIGHT = height;
		setWindowHeight(height);
	};

	if (!isLoadingComplete && !props.skipLoadingScreen) {
		return null;
	} else {
		return (
			<View onLayout={getWindowHeight} style={{ flex: 1 }}>
				<Provider stores={[globalStore]}>
					<NavigationContainer
						ref={containerRef}
						initialState={initialNavigationState}
					>
						<Stack.Navigator>
							<Stack.Screen name="Root" component={BottomTabNavigator} />
						</Stack.Navigator>
					</NavigationContainer>



					<DropdownAlert ref={(ref) => setDropdownRefValue(ref)} />
				</Provider>
			</View>
		);
	}
}
