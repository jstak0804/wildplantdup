import React from 'react';

interface styledImageProps {
  src: string;
}
export const StyledImage: React.FC<styledImageProps> = ({ src }) => {
  return (
    <img
      style={{
        maxWidth: '200px',
        height: '200px',
        margin: '10px',
        display: 'inline-block',
      }}
      src={src}
    />
  );
};
