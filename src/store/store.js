import React, { createContext } from 'react';
import { bodyApi } from 'api/api';

export const StoreContext = createContext();

const Store = ({ children }) => {
	const options = {
		blk: false, //다크모드 제어
	};
	return (
		<StoreContext.Provider value={options}>
			{children}
		</StoreContext.Provider>
	);
};

export default Store;
