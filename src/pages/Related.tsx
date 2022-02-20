/**@jsxRuntime classic */
/** @jsx jsx*/
import React from 'react';
import { jsx, css } from '@emotion/react';
import { Card } from '../components/Card';

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

interface Props {
  url: Array<string>;
}
const Related: React.FC<Props> = ({ url }) => {
  return (
    <Card
      className="resultCard"
      title="해당 식물 관련 이미지" //align-center
      style={{
        boxShadow: ' 0px 0px 20px 0px gray',
        alignContent: 'center',
        width: '100%',
        alignSelf: 'center',
        alignItems: 'cemter',
        minHeight: '330px',
        margin: '10px',
        marginTop: '20px',
        flexGrow: '1',
      }}
    >
      {url.map((item) => (
        <StyledImage key={item} src={item} />
      ))}
    </Card>
  );
};
export default Related;
