import React, { useCallback, useEffect, useState } from 'react';
import {
  Button,
  Row,
  Col,
  Card,
  Image,
  Upload,
  Space,
  Radio,
  message,
} from 'antd';
import UploadOutlined from '@ant-design/icons/lib/icons/UploadOutlined';
const axios = require('axios').default;
const defaultImage =
  'data:image/png;base64,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';
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

    // You can use any AJAX library you like
    await axios({
      method: 'post',
      url: 'http://localhost:8000/imageuploadpost/',
      data: formData,
    }).then((rsp) => {
      console.log('rsp', rsp.data);
      onClickAI();
    });

    // fetch('http://localhost:8000/imageuploadpost/', {
    //   method: 'post',
    //   processData: true,
    //   mode: 'no-cors', // no-cors,
    //   body: formData
    // })
    //   .then((rsp) => {return rsp.text() })
    //   .then((rsp) => {return rsp.json()})
    //   .then((data) => {return console.log('result',data)}, onClickAI())
  }, [imageFile, value]);

  // const radio = () => {
  //   state = {
  //     value: 1,
  //   };
  //   onChange = (e) => {
  //     console.log('radio checked', e.target.value);
  //     this.setState({
  //       value: e.target.value,
  //     });
  //   };
  // };

  // const error = () => {
  //   if ((value = { value })) {
  //     message.error('인식 방법을 선택해주세요!');
  //   }
  // };

  // class App extends React.Component {
  //   state = {
  //     value: 1,
  //   };

  //   onChange = e => {
  //     console.log('radio checked', e.target.value);
  //     this.setState({
  //       value: e.target.value,
  //     });
  //   };

  return (
    <>
      <Row gutter={16}>
        <Col span={10} offset={7}>
          <tr></tr>
          <Card
            title="적용이미지"
            style={{
              boxShadow: ' 0px 0px 20px 0px gray',
              textAlign: 'center',
              placeContent: 'center',
              minWidth: '480px',
              maxWidth: '200%',
              minHeight: '400px',
              maxHeight: '700px',
            }}
          >
            <p></p>
            <Image
              width={200}
              height={200}
              src={imageUrl}
              fallback={defaultImage}
            />
            <p></p>
            {imageUrl ? (
              <>
                <Space>
                  <Upload
                    // name="avatar"
                    // listType="picture-card"
                    // className="avatar-uploader"
                    showUploadList={false}
                    action="http://localhost:8000/imageuploadpost/"
                    beforeUpload={beforeUpload}
                    name="image"
                  >
                    {/* <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> */}
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
                </Space>
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
                name="avatar"
                // listType="picture-card"
                // className="avatar-uploader"
                showUploadList={false}
                action="http://localhost:8000/imageuploadpost/"
                type="image"
                beforeUpload={beforeUpload}
              >
                {/* <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> */}
                <Button icon={<UploadOutlined />} type="primary">
                  사진 업로드
                </Button>
              </Upload>
            )}
          </Card>
        </Col>
        <Col span={7}></Col>
      </Row>
      <Row></Row>
    </>
  );
};

export default Loading;
/**              <Button onClick={() => setImageUrl('')}>
                이미지 다시 선택하기
              </Button> */
