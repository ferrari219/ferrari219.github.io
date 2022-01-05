import React, { createContext, useState, useEffect } from 'react';
import { bodyApi } from 'api/api';

export const StoreContext = createContext();

const Store = ({ children }) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);

	const getData = async () => {
		setLoading(true);
		try {
			const { data: iam } = await bodyApi.iam();
			setData(iam);
			console.log(data);
		} catch {
			console.log("Can't find information");
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		getData();
	}, []);
	const options = {
		blk: false, //다크모드 제어
		iam: data,
	};
	return (
		<StoreContext.Provider value={options}>
			{children}
		</StoreContext.Provider>
	);
};

export default Store;
