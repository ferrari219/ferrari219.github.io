import React, { createContext } from 'react';

export const StoreContext = createContext();

const Store = ({ children }) => {
	const options = {
		blk: false,
	};
	return (
		<StoreContext.Provider value={options}>
			{children}
		</StoreContext.Provider>
	);
};

export default Store;
