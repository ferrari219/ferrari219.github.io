import Globals from '../src/styles/Globals';
import theme from '../src/styles/theme';
import { ThemeProvider } from '@emotion/react';
import Store from '../src/store/store';

export const decorators = [
	(Story) => (
		<>
			<Store>
				<ThemeProvider theme={theme}>
					<Globals />
					<Story />
				</ThemeProvider>
			</Store>
		</>
	),
];

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};
