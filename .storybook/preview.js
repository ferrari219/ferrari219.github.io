import Globals from '../src/styles/Globals';
import theme from '../src/styles/theme';
import { ThemeProvider } from '@emotion/react';
import Store from '../src/store/store';
import Canvas from '../src/components/02_Molecules/Canvas';

export const decorators = [
	(Story) => (
		<>
			<Store>
				<ThemeProvider theme={theme}>
					<Globals />
					<Canvas>
						<Story />
					</Canvas>
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
