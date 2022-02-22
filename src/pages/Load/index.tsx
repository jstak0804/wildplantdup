import React, { useCallback, useState } from 'react';
import { Button, Card, Upload, Radio } from 'antd';
import Image from '../../components/Image';
import UploadOutlined from '@ant-design/icons/lib/icons/UploadOutlined';
import axios from 'axios';
import { StateInterface } from '@/util';
import { Wrapper } from './wrapper';
import Modal from './modal';
import { ReqError } from './utils';
interface Props {
  state: StateInterface;
}

function checkSendable(imageFile: File | null, value: number): boolean {
  let notSendable = false;
  if (imageFile === undefined || imageFile === null) {
    notSendable = true;
  } else if (value === undefined || value === null || value > 3) {
    notSendable = true;
  }
  return notSendable;
}

const Loading: React.FC<Props> = ({ state }) => {
  const [imageFile, setImageFile] = React.useState<null | File>(null);
  const [reqError, setReqError] = React.useState<ReqError>(ReqError.Normal);
  const [modalSate, setModalState] = useState(false);
  const { imageUrl, setImageUrl, setAI, setParsedData, setLoader } = state;
  const [value, setValue] = React.useState(4);
  const beforeUpload = useCallback((file) => {
    setImageFile(file);
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) setImageUrl(reader.result?.toString() || '');
    };
    reader.readAsDataURL(file);
  }, []);

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const handleUpload = useCallback(async () => {
    setReqError(ReqError.Normal);
    if (checkSendable(imageFile, value)) {
      setModalState(true);
      return;
    }
    const formData = new FormData();
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
      setAI(true);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const status = error.response!.status;
        if (status === 422) {
          setReqError(ReqError.SelectError);
        } else {
          setReqError(ReqError.ServerError);
        }
      } else {
        setReqError(ReqError.Undefined);
      }
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
          분류 AI 실행
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
        imageUrl={imageUrl}
        value={value}
        reqError={reqError}
      />
    </React.Fragment>
  );
};

export default Loading;
