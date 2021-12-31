import React, { createContext } from 'react';

export const ModeContext = createContext();

const ModeStore = ({ children }) => {
	const modes = {
		blk: true,
	};
	return (
		<ModeContext.Provider value={modes}>{children}</ModeContext.Provider>
	);
};

export default ModeStore;
