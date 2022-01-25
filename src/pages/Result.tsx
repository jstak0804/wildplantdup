/**@jsxRuntime classic */
/** @jsx jsx*/
import React from 'react';
import { jsx, css } from '@emotion/react';
import { Button, Image } from 'antd';
import { Card } from '../components/Card';
import CenterContainer from '../components/CenterContainer';
import Related from './Related';
import { StateInterface } from '../util';
import UploadOutlined from '@ant-design/icons/lib/icons/UploadOutlined';

interface Props {
  state: StateInterface;
}

const CardCss = css`
  boxshadow: '0px 0px 20px 0px gray';
  height: 330px;
  margin: 25px;
  min-width: 300px;
  display: inline-block;
`;

// eslint-disable-next-line react/prop-types
const Result: React.FC<Props> = ({ state }) => {
  const { imageUrl, setImageUrl, setAI } = state;
  const removeImageUrl = () => {
    setAI(false);
    setImageUrl('');
  };

  return (
    <div
      css={css`
        margin-bottom: 20px;
      `}
    >
      <CenterContainer direction="row">
        <CenterContainer direction="column">
          <Card bordered={false}>
            <div>
              <Button
                type="primary"
                onClick={removeImageUrl}
                style={{
                  marginLeft: '10px',
                  display: 'block',
                  left: '10px',
                  borderRadius: '10px',
                }}
              >
                <UploadOutlined />
                이미지 선택
              </Button>
              <Card
                css={css`
                  ${CardCss}
                `}
                style={{
                  minWidth: '200px',
                  maxWidth: '330px',
                }}
                title="불러온 이미지"
              >
                <Image width={200} height={200} src={imageUrl}></Image>
              </Card>

              <Card
                title="식물 정보"
                css={css`
                  ${CardCss}
                `}
                style={{
                  maxWidth: '500px',
                }}
              >
                <Image height={200} src="https://ifh.cc/g/YbTFm6.jpg" />
              </Card>

              <Card
                title="성분분석 이미지"
                css={css`
                  ${CardCss}
                `}
                style={{
                  maxWidth: '450px',
                }}
              >
                <Image height={200} src="https://ifh.cc/g/bTYZS8.png" />
              </Card>
            </div>
          </Card>
          <Related />
        </CenterContainer>
      </CenterContainer>
    </div>
  );
};

export default Result;
