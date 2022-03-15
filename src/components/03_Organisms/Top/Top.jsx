import React, { useContext } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import theme from 'styles/theme';
import PropTypes from 'prop-types';
import { StoreContext } from 'store/store';
import Me from 'assets/img/me.jpg';

const Top = () => {
	const { me, blk } = useContext(StoreContext);
	// console.log(me);
	return (
		<section css={sectionStyle} className={blk ? 'black' : ''}>
			<div className="left">
				<img src={Me} alt="me" />
			</div>
			{me && (
				<div className="right">
					<dl>
						<dt>{me.name}</dt>
						<dd>{me.job}</dd>
					</dl>
				</div>
			)}
		</section>
	);
};

Top.defaultProps = {
	name: 'Lorem ipsum',
	job: 'Lorem ipsum',
};

Top.propTypes = {
	name: PropTypes.string,
	job: PropTypes.string,
};

const sectionStyle = css`
	display: flex;
	flex-direction: row;
	font-size: ${theme.size.base};
	background-color: #fff;
	color: ${theme.color.def};
	&.black {
		background-color: ${theme.color.dark.bg2};
		color: #fff;
	}
	.left {
		flex: 6;
		img {
			display: block;
			width: 100%;
		}
	}
	.right {
		flex: 10;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		dl {
			max-width: 50rem;
			padding: 0 7rem;
		}
		dt {
			margin: 0;
			padding: 0;
			font-weight: 600;
			font-size: 7rem;
			line-height: 1.1;
		}
		dd {
			margin: 0;
			padding: 1rem 0;
			font-weight: 400;
			font-size: 3rem;
			line-height: 1.1;
		}
	}
	@media only screen and (max-width: 768px) {
		position: relative;
		flex-direction: column;
		overflow: hidden;
		height: 50vw;
		&::before {
			content: '';
			position: absolute;
			width: 100%;
			height: 100%;
			background-color: #000;
			opacity: 0.3;
			z-index: 1;
		}
		.left {
			position: absolute;
			left: 0;
			top: -30vw;
			width: 100%;
		}
		.right {
			display: flex;
			justify-content: center;
			position: absolute;
			bottom: 13vw;
			z-index: 3;
			width: 100%;
			/* color: #fff; */
			/* background-color: red; */
			dl {
				max-width: 100%;
				padding: 0;
			}
			dt {
				font-size: 10vw;
				text-align: center;
				color: #fff;
			}
			dd {
				font-size: 5vw;
				text-align: center;
				color: #fff;
			}
		}
	}
`;

export default Top;
