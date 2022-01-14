import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import Layout from './components/Layout';
import Result from './pages/Result';
import Load from './pages/Load';

import 'reset.css';
import './index.css';
const Root: React.FC = () => (
  <Layout>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Load
              onClickAI={undefined}
              imageUrl={undefined}
              setImageUrl={undefined}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  </Layout>
);

ReactDOM.render(<Root />, document.getElementById('root'));
serviceWorker.unregister();
