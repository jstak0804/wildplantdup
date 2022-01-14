import { Layout as AntLayout, PageHeader } from 'antd';
import React from 'react';
const { Header, Content } = AntLayout;
const Layout: React.FC = ({ children }) => (
  <AntLayout style={{ height: '100%' }}>
    <Header className="header">
      <PageHeader
        className="site-page-header"
        title="AI 식의학용 자생식물 도감"
        text-align="center"
      />
    </Header>
    <Content style={{ marginTop: '50px', height: '100%' }}>{children}</Content>
  </AntLayout>
);

export default Layout;
