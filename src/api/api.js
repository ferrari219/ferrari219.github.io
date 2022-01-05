import axios from 'axios';
export const baseURL = 'https://ferrari219.github.io/data/json/';

const Api = axios.create({
	baseURL: baseURL,
});

export default Api;
export const topApi = {
	me: () => Api.get('top/me.json'),
};
export const bodyApi = {
	iam: () => Api.get('body/iam.json'),
	skill: () => Api.get('body/skill.json'),
};
