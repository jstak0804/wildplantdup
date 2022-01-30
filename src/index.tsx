import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import Layout from './components/Layout';
import Result from './pages/Result';
import Load from './pages/Load';

import 'reset.css';
import './index.css';
import { StateInterface } from './util';

const Root: React.FC = () => {
  const [AI, setAI] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [parsedData, setParsedData] = useState({});
  const states: StateInterface = {
    AI,
    imageUrl,
    parsedData,
    setAI,
    setImageUrl,
    setParsedData,
  };
  return (
    <Layout>{AI ? <Result state={states} /> : <Load state={states} />}</Layout>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
serviceWorker.unregister();
