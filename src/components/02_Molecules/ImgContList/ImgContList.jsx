import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import theme from 'styles/theme';
import PropTypes from 'prop-types';
import ImgContListLi from 'components/01_Atoms/ImgContListLi';

const ImgContList = ({ sttl, list }) => {
	return (
		<div css={imgcontlistStyle} key={sttl}>
			<h4>{sttl}</h4>
			<div className="list">
				{list.map((list) => (
					<ImgContListLi key={list.id} {...list} />
				))}
			</div>
		</div>
	);
};

ImgContList.propTypes = {
	id: PropTypes.number,
	img: PropTypes.string,
	name: PropTypes.string,
};

const imgcontlistStyle = css`
	h4 {
		margin: 0;
		padding: 0.5rem 0;
		color: ${theme.color.main};
	}
	.list {
		display: flex;
		flex-flow: row wrap;
		padding-bottom: 2rem;
	}
	@media only screen and (max-width: 768px) {
	}
`;

export default ImgContList;
