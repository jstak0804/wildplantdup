import React, { useCallback } from 'react';
import { Button, Card, Upload, Radio } from 'antd';
import Image from '../../components/Image';
import UploadOutlined from '@ant-design/icons/lib/icons/UploadOutlined';
import axios from 'axios';
import { StateInterface } from '@/util';
import { Wrapper } from './wrapper';
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
  const { imageUrl, setImageUrl, setAI } = state;
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

  const handleUpload = useCallback(async () => {
    if (isAbleData(value, imageFile) == false) return;
    const formData = new FormData();
    console.log('aaaaaaa', value);
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

  return (
    <React.Fragment>
      <Wrapper>
        <Image imageUrl={imageUrl} />
        <Upload
          showUploadList={false}
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
          </Radio.Group>
        </Card>
      </Wrapper>
    </React.Fragment>
  );
};

export default Loading;
