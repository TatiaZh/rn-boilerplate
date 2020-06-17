import PropTypes from 'prop-types';
import React from 'react';
import { Chase } from 'react-native-animated-spinkit';

function Loader(props) {
	return <Chase size={20} {...props} />;
}

Loader.propTypes = {
	size: PropTypes.number,
	color: PropTypes.string,
	animating: PropTypes.bool,
	hidesWhenStopped: PropTypes.bool,
};

export default Loader;
