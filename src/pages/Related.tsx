/**@jsxRuntime classic */
/** @jsx jsx*/
import React from 'react';
import { jsx, css } from '@emotion/react';
import { Card } from 'antd';

interface styledImageProps {
  src: string;
}
const StyledImage: React.FC<styledImageProps> = ({ src }) => {
  return (
    <img
      css={css`
        max-width: 200px;
        height: 200px;
        margin: 10px;
        display: inline-block;
      `}
      src={src}
    />
  );
};

function Related() {
  return (
    <Card
      className="resultCard"
      title="해당 식물 관련 이미지"
      style={{
        boxShadow: ' 0px 0px 20px 0px gray',
        alignContent: 'center',
        width: '100%',
        alignSelf: 'center',
        alignItems: 'cemter',
        minHeight: '330px',
        marginTop: '35px',
      }}
    >
      <StyledImage src="https://ifh.cc/g/RWIPum.jpg" />

      <StyledImage src="https://ifh.cc/g/LQC5ir.jpg" />

      <StyledImage src="https://ifh.cc/g/csKH16.jpg" />

      <StyledImage src="https://ifh.cc/g/xzitCO.jpg" />

      <StyledImage src="https://ifh.cc/g/Q7geji.jpg" />
    </Card>
  );
}
export default Related;
