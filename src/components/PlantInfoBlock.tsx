import React from 'react';

interface Props {
  Data: any;
}

export const PlantInfoBlock: React.FC<Props> = ({ Data, children }) => {
  return (
    <div style={{ height: '200px', display: 'flex', flexFlow: 'column' }}>
      <div style={{ flexGrow: '1' }}>
        <div>이름: {Data.name}</div>
        <div>품종: {Data.categorization}</div>
        <div>학명: {Data.literature}</div>
      </div>
      <div>{children}</div>
    </div>
  );
};
