import React from 'react';

import Button from '../Button/Button';
import Parent from '../Parent/Parent';

const GrandParent = () => {
	return (
		<div>
			<h3>Grand Parent</h3>
			<Parent />
			<Button />
		</div>
	);
};

export default GrandParent;
