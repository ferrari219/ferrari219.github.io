import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import theme from 'styles/theme';
import PropTypes from 'prop-types';

const Company = ({ company, date, blk }) => {
  return (
    <div css={CompanyStyle}>
      <span>{date}</span>
      <strong>{company}</strong>
    </div>
  );
};

Company.defaultProps = {
  company: 'Lorem ipsum',
  date: '0000~0000',
};

Company.propTypes = {
  // contDt: PropTypes.string,
  blk: PropTypes.bool,
};

const CompanyStyle = css`
  margin: 0;
  padding: 0;
  & > span {
    display: block;
    padding: 1rem 0 0.3rem 0;
    font-size: ${theme.size.sm};
  }
  & > strong {
    display: block;
    font-size: ${theme.size.md};
    word-break: keep-all;
  }
  @media only screen and (max-width: 768px) {
    & > strong {
      padding-bottom: 1rem;
      font-size: ${theme.size.lg};
    }
  }
`;

export default Company;
