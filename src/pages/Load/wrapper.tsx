import React from 'react';
import CenterContainer from '../../components/CenterContainer';
import { Card } from 'antd';

export const Wrapper: React.FC = ({ children }) => {
  return (
    <CenterContainer direction="row">
      <CenterContainer direction="column">
        <Card
          title="적용이미지"
          className="resultCard"
          style={{
            boxShadow: ' 0px 0px 20px 0px gray',
            textAlign: 'center',
            placeContent: 'center',
            minWidth: '100%',
            maxWidth: '500px',
            minHeight: '400px',
            maxHeight: '700px',
          }}
          headStyle={{
            fontSize: 'large',
            fontWeight: 'bold',
            backgroundColor: 'rgba(220, 220, 220, 0.616)',
          }}
        >
          {children}
        </Card>
      </CenterContainer>
    </CenterContainer>
  );
};

export default Wrapper;
