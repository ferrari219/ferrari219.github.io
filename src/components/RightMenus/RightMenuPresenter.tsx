import MyName from 'components/MyName';
import React from 'react';
import styled from 'styled-components';
import { SrOnly } from 'components/styles/globalStyle';
import { Link } from 'react-router-dom';
import { ReactComponent as Close } from 'assets/svg/close.svg';
// import { ReactComponent as Iam } from 'assets/svg/iam.svg';
// import { ReactComponent as Career } from 'assets/svg/career.svg';
// import { ReactComponent as Portfolio } from 'assets/svg/portfolio.svg';

interface IrightmnuProps {
  // category: object | null;
  iam: object | null;
}

const RightMenuPresenter: React.FunctionComponent<IrightmnuProps> = ({
  // category,
  iam,
}) => {
  // console.log(category);
  return (
    <Div>
      <Sronly>RightMenu</Sronly>
      <button onClick={handleCloseBtn}>
        <Close />
      </button>
      <Wrap>
        <MyName {...iam} />
        <ul>
          <li>
            <Link to="/">
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/iam">
              {/* <Iam /> */}
              <span>I am...</span>
            </Link>
          </li>
          <li>
            <Link to="/career">
              {/* <Career /> */}
              <span>Career</span>
            </Link>
          </li>
          <li>
            <Link to="/portfolio">
              {/* <Portfolio /> */}
              <span>Portfolio</span>
            </Link>
          </li>
        </ul>
      </Wrap>
      <Dimmed />
    </Div>
  );
};

const Div = styled.div`
  position: relative;
  width: 100vw;
  /* max-width: 89rem; */
  height: 100vh;
  color: ${({ theme }) => theme.colors.gray3};
  button {
    position: absolute;
    top: 2rem;
    right: 2rem;
    z-index: 3;
    svg {
      flex: 0 0 2.5rem;
      fill: ${({ theme }) => theme.colors.gray3} !important;
    }
  }
`;
const Wrap = styled.div`
  position: relative;
  width: 90%;
  height: 100vh;
  margin: 0 0 0 auto;
  background-color: ${({ theme }) => theme.colors.grayF};
  z-index: 2;
  ul {
    padding: 3rem;
    li {
      a {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 1rem 0;

        svg {
          flex: 0 0 3rem;
          width: 100%;
          height: auto;
          fill: ${({ theme }) => theme.colors.gray6};
        }
        span {
          flex: 1;
          padding: 0 2rem;
        }
      }
    }
  }
`;
const handleCloseBtn = (e: React.SyntheticEvent) => {
  //   console.log('close');
  const nav = document.querySelector('nav') as HTMLParagraphElement;
  nav.classList.remove('is-active');
};

const Dimmed = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray0};
  opacity: 0.7;
  z-index: 1;
`;
const Sronly = styled.h1`
  ${SrOnly}
`;

export default RightMenuPresenter;
