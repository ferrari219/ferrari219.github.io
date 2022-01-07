import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import theme from 'styles/theme';
import PropTypes from 'prop-types';

const Project = ({ title, result, img, lnk, blk }) => {
  return (
    <div css={projectStyle}>
      {lnk ? (
        <a href={lnk} target="_blank" rel="noreferrer">
          <dl className={blk ? 'black' : ''}>
            {title && <dt>{title}</dt>}
            {result && <dd>{result}</dd>}
          </dl>
        </a>
      ) : (
        <div css={projectStyle}>
          <dl className={blk ? 'black' : ''}>
            {title && <dt>{title}</dt>}
            {result && <dd>{result}</dd>}
          </dl>
        </div>
      )}
    </div>
  );
};

Project.defaultProps = {
  title: 'Lorem ipsum',
  // result: 'Lorem ipsum',
};

Project.propTypes = {
  title: PropTypes.string,
  result: PropTypes.string,
  img: PropTypes.string,
  lnk: PropTypes.string,
  blk: PropTypes.bool,
};

const projectStyle = css`
  & > a {
    dt:hover {
          padding: 0.3rem 1rem;
        background: linear-gradient(
          0.25turn,
          ${theme.color.main},
          ${theme.color.main},
          transparent
        );
        color: #fff;
        border-radius: 0.5rem;
      }
    }
  }
  dl {
    margin: 0;
    padding: 0.4rem 0;
    & > dt {
      margin: 0;
      padding: 0;
      font-size: ${theme.size.base};
      color: ${theme.color.def};
      word-break: keep-all;
      transition: all 0.2s ease-in-out;
    }
    & > dd {
      position: relative;
      margin: 0;
      padding: 0 0 0 1.2rem;
      font-size: ${theme.size.sm};
      color: #6c6c6c;
      word-break: keep-all;
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 1rem;
        width: 0.5rem;
        display: block;
        border-top: 0.1rem solid ${theme.color.def};
        opacity: 0.7;
      }
    }
  }
`;

export default Project;
