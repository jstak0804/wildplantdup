/**@jsxRuntime classic */
/** @jsx jsx*/
import React from 'react';
import { jsx, css } from '@emotion/react';
interface Prop {
  direction: 'row' | 'column';
  display?: boolean;
  onClick?(e: React.MouseEvent<HTMLElement, MouseEvent>): void;
}
interface BlankProp {
  onClick?(e: React.MouseEvent<HTMLElement, MouseEvent>): void;
}
const BlankBox: React.FC<BlankProp> = ({ children, onClick }) => {
  return (
    <div
      css={css`
        flex-grow: 1;
      `}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

const Container: React.FC<Prop> = ({
  direction = 'row',
  children,
  onClick,
  display,
}) => {
  return (
    <div
      css={css`
        flex-flow: ${direction};
      `}
      style={{
        height: '100%',
        width: '100%',
        display: display !== false ? 'flex' : 'none',
      }}
    >
      <BlankBox onClick={onClick} />
      <div>{children}</div>
      <BlankBox onClick={onClick} />
    </div>
  );
};
export default Container;
