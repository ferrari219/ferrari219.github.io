import Globals from '../src/styles/Globals';
import theme from '../src/styles/theme';
import { ThemeProvider } from '@emotion/react';

export const decorators = [
	(Story) => {
		<>
			<ThemeProvider theme={theme}>
				<Head>
					<meta charset="utf-8" />
					<meta http-equiv="X-UA-Compatible" content="IE=edge" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1"
					/>
					<meta name="robots" content="index,follow" />
					<meta name="referrer" contents="always" />
					<meta name="format-detection" content="telephone=no" />
				</Head>
				<Globals />
				<Story />
			</ThemeProvider>
		</>;
	},
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
