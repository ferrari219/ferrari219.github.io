import { configureStore, createSlice } from '@reduxjs/toolkit';

const active = createSlice({
	name: 'act',
	initialState: [],
	reducers: {
		add: (state, action) => {
			state.push({ text: action.payload, id: Date.now() });
		},
	},
});

const store = configureStore({ reducer: active.reducer });

export const { add } = active.actions;
export default store;
