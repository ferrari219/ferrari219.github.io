//theme.ts
const theme = {
	color: {
		main: '#705AEC',
		def: '#363636',
		light: {
			bg: '#ebebeb',
			bg2: '#f6f6f6',
			btn: {
				def: '#d9d9d9',
				act: '#486FF2',
				err: '#d95959', //에러났을때
				suc: '#1AB987', //성공했을때
			},
		},
		dark: {
			bg: '#434753',
			bg2: '#2C323E',
			btn: {
				def: '#d9d9d9',
				act: '#486FF2',
				err: '#d95959', //에러났을때
				suc: '#1AB987', //성공했을때
			},
		},
	},
	size: {
		sm: '1.4rem',
		base: '1.6rem',
		md: '1.8rem',
		lg: '2.2rem',
		xlg: '2.8rem',
	},
	shadow: {
		// https://getcssscan.com/css-box-shadow-examples
		zero: 'rgba(149, 157, 165, 0.2) 0px 8px 24px;',
		deep: 'rgba(0, 0, 0, 0.6) 0px 7px 29px 0px;',
	},
	url: 'https://ferrari219.github.io/data/',
};

export default theme;
