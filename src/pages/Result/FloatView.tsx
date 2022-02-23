import React from 'react';
import Container from '../../components/CenterContainer';
import { StyledImage } from './StyledImage';
import { CloseOutlined } from '@ant-design/icons';
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
        height: '100%',
        width: '100%',
        margin: '20px',
        display: display ? 'block' : 'none',
        position: 'relative',
      }}
    >
      <CloseOutlined onClick={closeAction} />
      <Container direction="row" onClick={closeAction}>
        <Container direction="column" onClick={closeAction}>
          <div style={WrapperStyle}>
            {chemical_images.map((item) => (
              <StyledImage key={item} src={item} />
            ))}
          </div>
        </Container>
      </Container>
    </div>
  );
};
