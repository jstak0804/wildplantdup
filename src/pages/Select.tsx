/**@jsxRuntime classic */
/** @jsx jsx*/
import React, { useState } from 'react';
import { jsx, css } from '@emotion/react';
import { PageHeader, Layout, Space, Image } from 'antd';
// import Loading from './Loading';
// import Result from './Result';

const { Header, Footer, Content } = Layout;
const App: React.FC = () => {
  const [imageUrl, setImageUrl] = useState('');

  const [ai, setAi] = useState(false);
  return (
    <React.Fragment>
      <div
        css={css`
          height: 100%;
        `}
      >
        asd
      </div>
    </React.Fragment>
  );
};

export default App;
