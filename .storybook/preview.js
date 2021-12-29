import Globals from '../src/styles/Globals';
import theme from '../src/styles/theme';
import { ThemeProvider } from '@emotion/react';

export const decorators = [
	(Story) => (
		<>
			<ThemeProvider theme={theme}>
				<Globals />
				<Story />
			</ThemeProvider>
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
