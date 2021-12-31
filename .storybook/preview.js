import Globals from '../src/styles/Globals';
import theme from '../src/styles/theme';
import { ThemeProvider } from '@emotion/react';
import ModeStore from '../src/store/mode';

export const decorators = [
	(Story) => (
		<>
			<ModeStore>
				<ThemeProvider theme={theme}>
					<Globals />
					<Story />
				</ThemeProvider>
			</ModeStore>
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
