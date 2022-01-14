import React from 'react';
import { css } from '@emotion/css';
interface Prop {
  direction: 'row' | 'column';
}
const BlankBox: React.FC = ({ children }) => {
  return (
    <div
      css={css`
        flex-grow: 1;
      `}
    >
      {children}
    </div>
  );
};

const Wrapper: React.FC<Prop> = ({ direction, children }) => {
  return (
    <div
      className={css`
        display: fex;
        height: 100%;
        width: 100%;
        flex-frow: ${direction};
      `}
    >
      {children}
    </div>
  );
};
const Container: React.FC<Prop> = ({ direction = 'row', children }) => {
  return (
    <Wrapper direction={direction}>
      <BlankBox />
      <div>{children}</div>
      <BlankBox />
    </Wrapper>
  );
};
export default Container;
