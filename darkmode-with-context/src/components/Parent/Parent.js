import React from 'react';

import Button from '../Button/Button';
import Child from '../Child/Child';
const Parent = () => {
	return (
		<div>
			<h3>Parent</h3>
			<Child />
			<Button />
		</div>
	);
};

export default Parent;
