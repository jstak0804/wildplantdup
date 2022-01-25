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

function isAbleData(value: number, imageFile?: File | null): boolean {
  if (imageFile === undefined) {
    alert('wrong image file\nplease reUpload Image');
    return false;
  }
  return true;
}

const Loading: React.FC<Props> = ({ state }) => {
  let imageFile: File | null = null;
  const [modalSate, setModalState] = useState(false);
  const { imageUrl, setImageUrl, setAI, AI } = state;
  const [value, setValue] = React.useState(4);
  const beforeUpload = useCallback((file) => {
    console.log('@@@ file', file);
    imageFile = file;
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
  const openModal = (sendableState: number) => {
    setModalState(true);
    //state 10: value
    // state 01 : image
  };
  const handleUpload = useCallback(async () => {
    if (isAbleData(value, imageFile) == false) return;
    const formData = new FormData();
    console.log('aaaaaaa', value);
    let notSendable = 0;
    if (imageFile === undefined || imageFile === null) {
      notSendable += 1;
    }
    if (value === undefined || value === null || value > 3) {
      notSendable += 2;
    }
    if (notSendable) {
      openModal(notSendable);
      return;
    }
    formData.append('image', imageFile!);
    formData.append('aivalue', value.toString());
    try {
      const rsp = await axios({
        method: 'post',
        url: 'http://localhost:8000/imageuploadpost/',
        data: formData,
      });
      console.log('rsp', rsp.data); //debug print
    } finally {
      setAI(true);
    }
  }, [imageFile, value]);

  const closeModal = () => {
    setModalState(false);
  };

  return (
    <React.Fragment>
      <Wrapper>
        <Image imageUrl={imageUrl} />
        <Upload
          showUploadList={false}
          beforeUpload={beforeUpload}
          style={{ display: 'block' }}
        >
          <Button style={{ color: 'black' }}>
            <UploadOutlined />
            이미지 선택
          </Button>
        </Upload>

        <Button
          onClick={handleUpload}
          type="primary"
          style={{ textAlign: 'center' }}
        >
          AI 인식 실행
        </Button>
        <Card
          title="AI 실행 전 아래 항목을 선택해주세요"
          style={{ display: 'block' }}
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
        항목이 부족함.
      </Modal>
    </React.Fragment>
  );
};

export default Loading;
