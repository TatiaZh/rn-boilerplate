import { Colors } from 'constants';
import usePrevious from 'hooks/usePrevious';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Animated } from 'react-native';

const defaultWidth = 8;
const activeWidth = 24;
const defaultDuration = 300;

export default function StepIndicator(props) {
	const _animations = [];
	for (let i = 0; i < props.count; i++) {
		_animations.push(new Animated.Value(0));
	}

	const [animations] = useState(_animations);

	const [prevActiveItemIndex] = usePrevious(props.activeIndex);

	useEffect(() => {
		const duration = props.duration || defaultDuration;
		// Expand currently active item
		Animated.timing(animations[props.activeIndex], {
			toValue: 1,
			duration,
		}).start();

		// Shrink previous item
		if (typeof prevActiveItemIndex === 'number') {
			Animated.timing(animations[prevActiveItemIndex], {
				toValue: 0,
				duration,
			}).start();
		}
	}, [props.activeIndex]);

	useEffect(() => {
		// Expand currently active item
		const nextItemIndex =
			props.progress < 0 ? props.activeIndex - 1 : props.activeIndex + 1;
		animations[props.activeIndex].setValue(1 - Math.abs(props.progress));
		if (animations[nextItemIndex]) {
			animations[nextItemIndex].setValue(Math.abs(props.progress));
		}
	}, [props.progress]);

	return (
		<View style={styles.wrapper}>
			{[...Array(props.count)].map((_, i) => {
				const widthAnimation = animations[i].interpolate({
					inputRange: [0, 1],
					outputRange: [defaultWidth, activeWidth],
				});
				const colorAnimation = animations[i].interpolate({
					inputRange: [0, 1],
					outputRange: [Colors.component16, Colors.primary100],
				});
				return (
					<Animated.View
						key={i}
						style={[
							styles.item,
							{ width: widthAnimation, backgroundColor: colorAnimation },
						]}
					/>
				);
			})}
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		flexDirection: 'row',
	},

	item: {
		width: defaultWidth,
		height: defaultWidth,
		borderRadius: defaultWidth / 2,
		backgroundColor: Colors.component16,
		marginRight: 8,
	},
});

StepIndicator.propTypes = {
	count: PropTypes.number.isRequired,
	activeIndex: PropTypes.number.isRequired,
	duration: PropTypes.number,
};
