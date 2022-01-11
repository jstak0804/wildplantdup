import React, { useState } from 'react';
import { PageHeader, Layout, Space, Image } from 'antd';
import Loading from './Loading';
import './App.css';
import Result from './Result';

const { Header, Footer, Content } = Layout;
const App = () => {
  const [imageUrl, setImageUrl] = useState('');

  const [ai, setAi] = useState(false);
  return (
    <div className="App">
      <Layout>
        <Header className="header">
          <PageHeader
            className="site-page-header"
            title="AI 식의학용 자생식물 도감"
            text-align="center"
          />
        </Header>
        <Content style={{ marginTop: '50px' }}>
          {ai ? (
            <Result
              imageUrl={imageUrl}
              onClick={() => {
                setAi(false);
                setImageUrl('');
              }}
            />
          ) : (
            <Loading
              onClickAI={() => setAi(true)}
              imageUrl={imageUrl}
              setImageUrl={setImageUrl}
            />
          )}
        </Content>
        <Footer></Footer>
      </Layout>
    </div>
  );
};

export default App;
