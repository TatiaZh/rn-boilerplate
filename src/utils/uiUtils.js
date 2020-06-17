import { LayoutAnimation } from 'react-native';

export const animateLayoutChanges = () => {
	const linearAnim = {
		duration: 200,
		create: {
			type: LayoutAnimation.Types.linear,
			property: LayoutAnimation.Properties.opacity,
		},
		update: {
			type: LayoutAnimation.Types.linear,
		},
	};
	LayoutAnimation.configureNext(linearAnim);
};
