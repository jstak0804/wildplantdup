import { Layout as AntLayout, PageHeader } from 'antd';
import React from 'react';
import { Loading } from './Loading';
const { Header, Content } = AntLayout;

interface Props {
  loading: boolean;
}

const Body: React.FC = ({ children }) => {
  return (
    <React.Fragment>
      <Header className="header">
        <PageHeader
          className="site-page-header"
          title="AI 식의학용 자생식물 도감"
          text-align="center"
        />
      </Header>
      <Content
        style={{ paddingTop: '10px', height: '100%', overflow: 'scroll' }}
      >
        {children}
      </Content>
    </React.Fragment>
  );
};

const Layout: React.FC<Props> = ({ children, loading }) => (
  <AntLayout style={{ height: '100%', backgroundColor: 'white' }}>
    <Body>{children}</Body>
    <Loading loading={loading} />
  </AntLayout>
);

export default Layout;
