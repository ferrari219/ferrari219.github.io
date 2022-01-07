import React, { useContext } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import theme from 'styles/theme';
// import PropTypes from 'prop-types';
import GWrap from 'components/02_Molecules/GWrap';
import Title from 'components/01_Atoms/Title';
import Cont from 'components/01_Atoms/Cont';
import ImgCont from 'components/03_Organisms/ImgCont';
import Exp from 'components/03_Organisms/Exp';
import { StoreContext } from 'store/store';

const Body = () => {
	const { iam, skill, contact, exp, blk } = useContext(StoreContext);
	// console.log(contact && contact.cont);
	return (
		<section css={sectionStyle}>
			<div className={['left', blk ? 'black' : ''].join(' ')}>
				{skill && (
					<GWrap>
						<Title ttl={skill.ttl} blk={blk ? false : true} />
						<ImgCont cont={skill.cont} blk={blk ? false : true} />
					</GWrap>
				)}
				{contact && (
					<GWrap>
						<Title ttl={contact.ttl} blk={blk ? false : true} />
						<Cont contUl={contact.cont} blk={blk ? false : true} />
					</GWrap>
				)}
			</div>
			<div className="right">
				{iam && (
					<GWrap>
						<Title ttl={iam.ttl} blk={blk ? true : false} />
						<Cont contUl={iam.cont} blk={blk ? true : false} />
					</GWrap>
				)}
				{exp && (
					<GWrap>
						<Title ttl={exp.ttl} blk={blk ? true : false} />
						<Exp cont={exp.cont} blk={blk ? true : false} />
					</GWrap>
				)}
			</div>
		</section>
	);
};

// Body.defaultProps = {
// 	contDt: 'Lorem ipsum',
// 	contDd: 'Lorem ipsum',
// };

// Body.propTypes = {
// 	contDt: PropTypes.string,
// 	contDd: PropTypes.string,
// };

const sectionStyle = css`
	display: flex;
	flex-direction: row;
	min-height: 100vh;
	& > .left {
		flex: 6;
		padding-top: 6rem;
		background-color: ${theme.color.dark.bg2};
		&.black {
			background-color: ${theme.color.light.bg2};
		}
	}
	& > .right {
		flex: 10;
	}
	@media only screen and (max-width: 768px) {
		display: block;
		& > .left {
			margin: 0;
			padding: 0;
		}
		& > .right {
			min-height: 100vh;
			margin: 0;
			padding: 0;
		}
	}
`;

export default Body;
