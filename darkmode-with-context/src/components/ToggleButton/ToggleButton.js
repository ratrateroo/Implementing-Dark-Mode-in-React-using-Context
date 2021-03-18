import React from 'react';

import './ToggleButton.css';

const ToggleButton = () => {
	return (
		<label className="switch">
			<input type="checkbox" />
			<span class="slider round"></span>
		</label>
	);
};

export default ToggleButton;
