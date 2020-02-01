import React from 'react';

export default ({ click, value }) => {
	return <input type="submit" value={value ? 'hide' : 'show'} onClick={() => click(!value)} />;
};
