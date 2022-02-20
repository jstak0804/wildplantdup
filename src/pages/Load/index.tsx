import React, { useCallback, useState } from 'react';
import { Button, Card, Upload, Radio } from 'antd';
import Image from '../../components/Image';
import UploadOutlined from '@ant-design/icons/lib/icons/UploadOutlined';
import axios from 'axios';
import { StateInterface } from '@/util';
import { Wrapper } from './wrapper';
import Modal from 'antd/lib/modal/Modal';
interface Props {
  state: StateInterface;
}

const ModalMsgDiv: React.FC = ({ children }) => {
  return <div style={{ margin: '1rem' }}>{children}</div>;
};
const Loading: React.FC<Props> = ({ state }) => {
  const [imageFile, setImageFile] = React.useState<null | File>(null);
  const [reqError, setReqError] = React.useState(false);
  const [modalSate, setModalState] = useState(false);
  const { imageUrl, setImageUrl, setAI, setParsedData, setLoader } = state;
  const [value, setValue] = React.useState(4);
  const beforeUpload = useCallback((file) => {
    console.log('@@@ file', file);
    setImageFile(file);
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) setImageUrl(reader.result?.toString() || '');
    };
    reader.readAsDataURL(file);
  }, []);

  const onChange = useCallback((e) => {
    console.log('radio checked', e);
    setValue(e.target.value);
  }, []);
  const handleUpload = useCallback(async () => {
    setReqError(false);
    let notSendable = 0x0000;
    if (imageFile === undefined || imageFile === null) {
      notSendable |= 0x0001;
    }
    if (value === undefined || value === null || value > 3) {
      notSendable |= 0x0010;
    }
    console.log(notSendable);
    if (notSendable != 0x0000) {
      setModalState(true);
      return;
    }
    console.log('passed');
    const formData = new FormData();
    console.log('aaaaaaa', value);
    formData.append('image', imageFile!);
    formData.append('aivalue', value.toString());
    setLoader(true);
    try {
      const rsp = await axios({
        method: 'post',
        url: 'https://prml.insiro.me/api/predict',
        data: formData,
      });
      setParsedData(rsp.data);
      console.log('rsp', rsp.data); //debug print
      setAI(true);
    } catch {
      setReqError(true);
      setModalState(true);
    } finally {
      setLoader(false);
    }
  }, [imageFile, value]);

  const closeModal = () => {
    setModalState(false);
  };

  return (
    <React.Fragment>
      <Wrapper>
        <Image imageUrl={imageUrl} />
        <div style={{ height: '0.5rem' }} />
        <Upload
          showUploadList={false}
          beforeUpload={beforeUpload}
          style={{ display: 'block' }}
          accept="image/*"
        >
          <Button style={{ color: 'black' }}>
            <UploadOutlined />
            이미지 선택
          </Button>
        </Upload>

        <Button
          onClick={handleUpload}
          type="primary"
          style={{ textAlign: 'center', marginLeft: '10px' }}
        >
          AI 인식 실행
        </Button>
        <Card
          title="AI 실행 전 아래 항목을 선택해주세요"
          style={{ display: 'block' }}
          headStyle={{
            fontSize: 'large',
            fontWeight: 'bold',
            backgroundColor: 'rgba(220, 220, 220, 0.616)',
          }}
        >
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={0}>꽃</Radio>
            <Radio value={1}>열매</Radio>
            <Radio value={2}>잎 (앞면)</Radio>
            <Radio value={3}>잎 (뒷면)</Radio>
          </Radio.Group>
        </Card>
      </Wrapper>
      <Modal
        visible={modalSate}
        onCancel={closeModal}
        footer={<Button onClick={closeModal}>close</Button>}
      >
        {imageUrl === '' ? (
          <ModalMsgDiv>이미지가 선택되지 않았습니다.</ModalMsgDiv>
        ) : (
          ''
        )}
        {value !== 4 ? (
          ''
        ) : (
          <ModalMsgDiv>분류가 선택되지 않았습니다.</ModalMsgDiv>
        )}
        {reqError == true ? (
          <ModalMsgDiv>서버가 응답하지 않습니다</ModalMsgDiv>
        ) : (
          ''
        )}
      </Modal>
    </React.Fragment>
  );
};

export default Loading;
