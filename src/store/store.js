import React, { createContext, useState, useEffect } from 'react';
import { bodyApi } from 'api/api';

export const StoreContext = createContext();

const Store = ({ children }) => {
	const [iamD, setIamD] = useState(null);
	const [skillD, setSkillD] = useState(null);
	const [loading, setLoading] = useState(false);

	const getData = async () => {
		setLoading(true);
		try {
			const { data: iam } = await bodyApi.iam();
			const { data: skill } = await bodyApi.skill();
			setIamD(iam);
			setSkillD(skill);
			console.log(skillD);
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
		iam: iamD,
		skill: skillD,
	};
	return (
		<StoreContext.Provider value={options}>
			{children}
		</StoreContext.Provider>
	);
};

export default Store;
