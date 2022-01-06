import React, { createContext, useState, useEffect } from 'react';
import { bodyApi } from 'api/api';

export const StoreContext = createContext();

const Store = ({ children }) => {
	const [value, setValue] = useState({
		iam: null,
		skill: null,
		contact: null,
		loading: false,
		error: null,
	});
	const { iam, skill, contact, loading, error } = value;

	const getData = async () => {
		setValue({
			...value,
			loading: !loading,
		});
		// console.log(value);
		try {
			const { data: iam } = await bodyApi.iam();
			const { data: skill } = await bodyApi.skill();
			const { data: contact } = await bodyApi.contact();
			setValue({
				...value,
				iam,
				skill,
				contact,
				loading: !loading,
			});
			// console.log(value);
		} catch (error) {
			console.log("Can't find information");
			setValue({
				...value,
				error,
			});
		}
	};
	useEffect(() => {
		getData();
	}, []);

	const options = {
		blk: false, //다크모드 제어
		iam,
		skill,
		contact,
		loading,
		error,
	};
	// const onClick = () => {
	// 	setValue({
	// 		...value,
	// 		iam: 'test',
	// 	});
	// 	console.log(value);
	// };
	return (
		<StoreContext.Provider value={options}>
			{/* <button onClick={onClick}>test</button> */}
			{children}
		</StoreContext.Provider>
	);
};

export default Store;
