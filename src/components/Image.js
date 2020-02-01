import React from 'react';
import lion from '../assets/lion.jpg';

export default ({ value }) => {
	return value && <img src={lion} alt="lion" />;
};
