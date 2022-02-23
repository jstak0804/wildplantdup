import React from 'react';
import { Card } from '../../components/Card';
import { StyledImage } from './StyledImage';

interface Props {
  url: Array<string>;
}
const Related: React.FC<Props> = ({ url }) => {
  return (
    <Card
      className="resultCard"
      title="해당 식물 관련 이미지" //align-center
      style={{
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
