import React from 'react';
import { PulseLoader } from 'react-spinners';
import CenterContainer from './CenterContainer';

interface Props {
  loading: boolean;
}

export const Loading: React.FC<Props> = ({ loading }) => {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        position: 'absolute',
        backgroundColor: 'rgba(1,1,1,0.3)',
        display: loading ? 'block' : 'none',
      }}
    >
      <CenterContainer direction="row">
        <CenterContainer direction="column">
          <PulseLoader color="cyan" size={17} margin={5} />
        </CenterContainer>
      </CenterContainer>
    </div>
  );
};

export default Loading;
