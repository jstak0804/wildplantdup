/**@jsxRuntime classic */
/** @jsx jsx*/
import React from 'react';
import { jsx, css } from '@emotion/react';
import { Button, Card, Image } from 'antd';
import CenterContainer from '../components/CenterContainer';
import Related from './Related';
import { StateInterface } from '../util';
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
              <Card
                css={css`
                  ${CardCss}
                `}
                style={{
                  minWidth: '200px',
                  maxWidth: '330px',
                }}
                title={
                  <Button
                    type="primary"
                    onClick={removeImageUrl}
                    style={{ marginLeft: '10px' }}
                  >
                    이미지 다시 선택하기
                  </Button>
                }
              >
                <Image width={200} height={200} src={imageUrl}></Image>
              </Card>

              <Card
                title="식물 이미지"
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
