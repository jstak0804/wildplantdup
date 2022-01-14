/**@jsxRuntime classic */
/** @jsx jsx*/
import React from 'react';
import { jsx, css } from '@emotion/react';
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

const FlexWrapperStyle = css`
  display: flex;
  height: 100%;
  width: 100%;
`;
const Container: React.FC<Prop> = ({ direction = 'row', children }) => {
  return (
    <div
      css={css`
        ${FlexWrapperStyle}
        flex-flow: ${direction};
      `}
    >
      <BlankBox />
      <div>{children}</div>
      <BlankBox />
    </div>
  );
};
export default Container;
