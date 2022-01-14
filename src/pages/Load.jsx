import React, { useCallback, useEffect, useState } from 'react';
import { Button, Row, Col, Card, Upload, Space, Radio, message } from 'antd';
import Image from '../components/Image';
import CenterContainer from '../components/CenterContainer';
import UploadOutlined from '@ant-design/icons/lib/icons/UploadOutlined';
import axios from 'axios';

// eslint-disable-next-line react/prop-types
const Loading = ({ onClickAI, imageUrl, setImageUrl }) => {
  const [imageFile, setImageFile] = useState(4);

  const beforeUpload = useCallback((file) => {
    console.log('@@@ file', file);
    setImageFile(file);
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImageUrl(reader.result);
      }
    };
    reader.readAsDataURL(file);
  }, []);

  const [value, setValue] = React.useState(4);

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

    formData.append('image', imageFile);
    formData.append('aivalue', value);

    await axios({
      method: 'post',
      url: 'http://localhost:8000/imageuploadpost/',
      data: formData,
    }).then((rsp) => {
      console.log('rsp', rsp.data);
      onClickAI();
    });
  }, [imageFile, value]);

  return (
    <>
      <CenterContainer>
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
            <Image imageUrl={imageUrl} />
            <p></p>
            {imageUrl ? (
              <>
                <Upload
                  showUploadList={false}
                  action="http://localhost:8000/imageuploadpost/"
                  beforeUpload={beforeUpload}
                  type="image"
                >
                  <Button
                    icon={<UploadOutlined />}
                    style={{ color: 'skyblue' }}
                  >
                    이미지 다시 선택하기
                  </Button>
                </Upload>

                <Button onClick={handleUpload} type="primary">
                  AI 인식 실행
                </Button>
                <Card title="AI 실행 전 아래 항목을 선택해주세요">
                  <Radio.Group onChange={onChange} value={value}>
                    <Radio value={0}>꽃</Radio>
                    <Radio value={1}>열매</Radio>
                    <Radio value={2}>잎 (앞면)</Radio>
                    <Radio value={3}>잎 (뒷면)</Radio>
                    <Radio value={4}>Ai 자동</Radio>
                  </Radio.Group>
                </Card>
              </>
            ) : (
              <Upload
                showUploadList={false}
                action="http://localhost:8000/imageuploadpost/"
                type="image"
                beforeUpload={beforeUpload}
              >
                <Button icon={<UploadOutlined />} type="primary">
                  사진 업로드
                </Button>
              </Upload>
            )}
          </Card>
        </CenterContainer>
      </CenterContainer>
    </>
  );
};

export default Loading;
