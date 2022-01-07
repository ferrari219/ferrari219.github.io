import React, { createContext, useState, useEffect } from 'react';
import { topApi, bodyApi } from 'api/api';

export const StoreContext = createContext();

const Store = ({ children }) => {
	const [value, setValue] = useState({
		me: null,
		iam: null,
		skill: null,
		contact: null,
		exp: null,
		loading: false,
		error: null,
	});
	const { me, iam, skill, contact, exp, loading, error } = value;

	const getData = async () => {
		setValue({
			...value,
			loading: !loading,
		});
		// console.log(value);
		try {
			const { data: me } = await topApi.me();
			const { data: iam } = await bodyApi.iam();
			const { data: skill } = await bodyApi.skill();
			const { data: contact } = await bodyApi.contact();
			const { data: exp } = await bodyApi.exp();

			setValue({
				...value,
				me,
				iam,
				skill,
				contact,
				exp,
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
		me,
		iam,
		skill,
		contact,
		loading,
		exp,
		error,
	};
	return (
		<StoreContext.Provider value={options}>
			{/* <button onClick={onClick}>test</button> */}
			{children}
		</StoreContext.Provider>
	);
};

export default Store;
