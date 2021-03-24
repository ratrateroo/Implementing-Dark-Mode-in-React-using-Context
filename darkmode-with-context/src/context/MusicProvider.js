import React from 'react';
import MusicContext from './MusicContext';

const MusicProvider = ({ children }) => {
	const grandmasFavSong = 'Toxic by B. Spears';
	return (
		<MusicContext.Provider value={grandmasFavSong}>
			{children}
		</MusicContext.Provider>
	);
};
export default MusicProvider;
