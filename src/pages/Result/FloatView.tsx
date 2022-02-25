import React from 'react';
import Container from '../../components/CenterContainer';
import { StyledImage } from './StyledImage';
import { CloseOutlined } from '@ant-design/icons';
import { Card } from '../../components/Card';
interface props {
  closeAction(): void;
  chemical_images: Array<string>;
  display: boolean;
}

const WrapperStyle: React.CSSProperties = {
  minWidth: '500px',
  maxWidth: '1000px',
};

export const FloatView: React.FC<props> = ({
  display,
  closeAction,
  chemical_images,
}) => {
  return (
    <div
      style={{
        height: '90%',
        width: '90%',
        padding: '20px',
        display: display ? 'block' : 'none',
        position: 'relative',
      }}
    >
      <div
        style={{ width: '100%', textAlign: 'right', padding: '3rem' }}
        onClick={closeAction}
      >
        <CloseOutlined onClick={closeAction} />
      </div>
      <Container direction="row" onClick={closeAction}>
        <Container direction="column" onClick={closeAction}>
          <div style={WrapperStyle}>
            <Card title={'성분 분석 이미지'}>
              {chemical_images.map((item) => (
                <StyledImage key={item} src={item} />
              ))}
            </Card>
          </div>
        </Container>
      </Container>
    </div>
  );
};
