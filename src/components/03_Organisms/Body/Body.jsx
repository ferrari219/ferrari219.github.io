import React, { useContext } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import theme from 'styles/theme';
import PropTypes from 'prop-types';
import GWrap from 'components/02_Molecules/GWrap';
import Title from 'components/01_Atoms/Title';
import Cont from 'components/01_Atoms/Cont';
import { ModeContext } from 'store/mode';

const Body = ({}) => {
	const context = useContext(ModeContext);
	return (
		<section css={sectionStyle}>
			<div className="left">
				<GWrap>
					<Title ttl="Skills" blk={context.blk ? false : true} />
					<Cont contP="test" blk={context.blk ? false : true} />
				</GWrap>
				<GWrap>
					<Title ttl="Contact" blk={context.blk ? false : true} />
					<Cont contP="test" blk={context.blk ? false : true} />
				</GWrap>
			</div>
			<div className="right">
				<GWrap>
					<Title ttl="I am" blk={context.blk ? true : false} />
					<Cont contP="test" blk={context.blk ? true : false} />
				</GWrap>
				<GWrap>
					<Title ttl="Experience" blk={context.blk ? true : false} />
					<Cont contP="test" blk={context.blk ? true : false} />
				</GWrap>
			</div>
		</section>
	);
};

Body.defaultProps = {
	contDt: 'Lorem ipsum',
	contDd: 'Lorem ipsum',
};

Body.propTypes = {
	contDt: PropTypes.string,
	contDd: PropTypes.string,
};

const sectionStyle = css`
	display: flex;
	flex-direction: row;
	.left {
		flex: 6;
		padding-top: 6rem;
		background-color: ${theme.color.dark.bg2};
	}
	.right {
		flex: 10;
	}
	@media only screen and (max-width: 768px) {
	}
`;

export default Body;
