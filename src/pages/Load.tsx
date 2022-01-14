import React, { useCallback, useState } from 'react';
import { Button, Card, Upload, Radio, message } from 'antd';
import Image from '../components/Image';
import CenterContainer from '../components/CenterContainer';
import UploadOutlined from '@ant-design/icons/lib/icons/UploadOutlined';
import axios from 'axios';

const Wrapper: React.FC = ({ children }) => {
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
        >
          {children}
        </Card>
      </CenterContainer>
    </CenterContainer>
  );
};

const Loading: React.FC = () => {
  const [imageFile, setImageFile] = useState<File>();
  const [imageUrl, setImageUrl] = useState('');
  const [ai, setAi] = useState(false);
  const [value, setValue] = React.useState(4);
  const beforeUpload = useCallback((file) => {
    console.log('@@@ file', file);
    setImageFile(file);
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImageUrl(reader.result?.toString() || '');
      }
    };
    reader.readAsDataURL(file);
  }, []);

  const onChange = useCallback((e) => {
    console.log('radio checked', e);
    setValue(e.target.value);
  }, []);

  const handleUpload = useCallback(async () => {
    console.log('aaaaaaa', value);
    if (typeof value === 'undefined') {
      message.error('인식 방법을 선택해주세요!');
      return;
    }
    const formData = new FormData();
    formData.append('image', imageFile!);
    formData.append('aivalue', value.toString());
    await axios({
      method: 'post',
      url: 'http://localhost:8000/imageuploadpost/',
      data: formData,
    }).then((rsp) => {
      console.log('rsp', rsp.data);
      setAi(true);
    });
  }, [imageFile, value]);

  return (
    <React.Fragment>
      <Wrapper>
        <Image imageUrl={imageUrl} />
        <Upload
          showUploadList={false}
          action="http://localhost:8000/imageuploadpost/"
          beforeUpload={beforeUpload}
          style={{ display: 'block' }}
        >
          <Button style={{ color: imageUrl ? 'skyblue' : 'black' }}>
            <UploadOutlined />
            {imageUrl ? '이미지 다시 선택하기' : '사진 업로드'}
          </Button>
        </Upload>

        <Button
          onClick={handleUpload}
          type="primary"
          style={imageUrl ? { textAlign: 'center' } : { display: 'none' }}
        >
          AI 인식 실행
        </Button>
        <Card
          title="AI 실행 전 아래 항목을 선택해주세요"
          style={{ display: imageUrl ? 'block' : 'none' }}
        >
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={0}>꽃</Radio>
            <Radio value={1}>열매</Radio>
            <Radio value={2}>잎 (앞면)</Radio>
            <Radio value={3}>잎 (뒷면)</Radio>
            <Radio value={4}>Ai 자동</Radio>
          </Radio.Group>
        </Card>
      </Wrapper>
    </React.Fragment>
  );
};

export default Loading;
