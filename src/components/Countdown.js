import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';

function padZeros(n) {
	return n <= 9 ? '0' + n : n;
}

function getSeconds(seconds) {
	return padZeros(seconds % 60);
}

function getMinutes(seconds) {
	return padZeros(Math.floor(seconds / 60));
}

function Countdown({ start, ...props }) {
	const [seconds, setSeconds] = useState(start);

	useEffect(() => {
		if (seconds <= 0) {
			return;
		}

		const tout = setTimeout(() => {
			setSeconds(seconds - 1);
		}, 1000);

		return () => {
			clearTimeout(tout);
		};
	});

	return (
		<Text {...props}>{getMinutes(seconds) + ':' + getSeconds(seconds)}</Text>
	);
}

Countdown.propTypes = {
	start: PropTypes.number.isRequired,
};

export default Countdown;
