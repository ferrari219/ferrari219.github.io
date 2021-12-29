import React from 'react';
import { css, Global } from '@emotion/react';

const Globals = () => {
	return (
		<Global
			styles={css`
				html {
					overflow-x: hidden;
					display: block;
					font-size: 62.5%;
					box-sizing: border-box;
					* {
						box-sizing: inherit;
					}
				}
				ul,
				dl {
					list-style: none;
					margin: 0;
					padding: 0;
				}
				body {
					background: #abaeb7 url('assets/img/');
					a {
						text-decoration: none;
						color: inherit;
					}

					/*******************************************************************
					font
					********************************************************************/
					font-family: Roboto, AppleSDGothicNeo-Regular, NotoSansKR,
						'Noto+Sans', 'Malgun Gothic', '맑은 고딕', sans-serif;
					font-size: 1.8rem;
					line-height: 1.5;
					letter-spacing: -0.08rem;
					* {
						font-family: inherit;
						line-height: inherit;
						letter-spacing: inherit;
					}
					@font-face {
						font-family: 'NotoSansKR';
						src: url(https://ferrari219.github.io/fonts/NotoSansCJKkr-DemiLight.woff2)
								format('woff2'),
							url(https://ferrari219.github.io/fonts/NotoSansCJKkr-DemiLight.woff)
								format('woff'),
							url(https://ferrari219.github.io/fonts/NotoSansCJKkr-DemiLight.otf)
								format('opentype');
						font-weight: 400;
					}
					@font-face {
						font-family: 'NotoSansKR';
						src: url(https://ferrari219.github.io/fonts/NotoSansCJKkr-Medium.woff2)
								format('woff2'),
							url(https://ferrari219.github.io/fonts/NotoSansCJKkr-Medium.woff)
								format('woff'),
							url(https://ferrari219.github.io/fonts/NotoSansCJKkr-Medium.otf)
								format('opentype');
						font-weight: 600;
					}
					@font-face {
						font-family: 'NotoSansKR';
						src: url(https://ferrari219.github.io/fonts/NotoSansCJKkr-Bold.woff2)
								format('woff2'),
							url(https://ferrari219.github.io/fonts/NotoSansCJKkr-Bold.woff)
								format('woff'),
							url(https://ferrari219.github.io/fonts/NotoSansCJKkr-Bold.otf)
								format('opentype');
						font-weight: 700;
					}
					@font-face {
						font-family: 'Roboto';
						src: url(https://ferrari219.github.io/fonts/Roboto-Regular.woff2)
								format('woff2'),
							url(https://ferrari219.github.io/fonts/Roboto-Regular.woff)
								format('woff'),
							url(https://ferrari219.github.io/fonts/Roboto-Regular.eot)
								format('embedded-opentype');
						font-weight: 400;
					}
					@font-face {
						font-family: 'Roboto';
						src: url(https://ferrari219.github.io/fonts/Roboto-Bold.woff2)
								format('woff2'),
							url(https://ferrari219.github.io/fonts/Roboto-Bold.woff)
								format('woff'),
							url(https://ferrari219.github.io/fonts/Roboto-Bold.eot)
								format('embedded-opentype');
						font-weight: 600;
					}
				}
			`}
		/>
	);
};

export default Globals;
