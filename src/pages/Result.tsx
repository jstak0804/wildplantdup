/**@jsxRuntime classic */
/** @jsx jsx*/
import React from 'react';
import { jsx, css } from '@emotion/react';
import { Button, Image, Modal } from 'antd';
import { Card } from '../components/Card';
import CenterContainer from '../components/CenterContainer';
import Related from './Related';
import { StateInterface } from '../util';
import ArrowLeftOutlined from '@ant-design/icons/lib/icons/ArrowLeftOutlined';
import { InfoBlock, Detail } from '../components/PlantInfo';
interface Props {
  state: StateInterface;
}

const CardCss = css`
  boxshadow: '0px 0px 20px 0px gray';
  height: 330px;
  margin: 10px;
  margintop: 10px;
  min-width: 300px;
  display: inline-block;
`;

// eslint-disable-next-line react/prop-types
const Result: React.FC<Props> = ({ state }) => {
  const { imageUrl, parsedData, setImageUrl, setAI } = state;
  const [ViewDetail, setViewDetail] = React.useState(false);
  const removeImageUrl = () => {
    setAI(false);
    setImageUrl('');
  };
  function viewDetailInfo() {
    setViewDetail(true);
  }
  function closeModal() {
    setViewDetail(false);
  }
  console.log(parsedData);
  return (
    <div
      css={css`
        margin-bottom: 20px;
      `}
    >
      <CenterContainer direction="row">
        <CenterContainer direction="column">
          <div style={{ display: 'flex', flexFlow: 'column' }}>
            <div style={{ flexGrow: '1' }}>
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
                <ArrowLeftOutlined />
                이전 화면
              </Button>
              <div style={{ display: 'flex' }}>
                <Card
                  css={css`
                    ${CardCss}
                  `}
                  bodyStyle={{
                    padding: '10px',
                  }}
                  style={{
                    minWidth: '220px',
                    maxWidth: '330px',
                    display: 'inline-block',
                  }}
                  title="불러온 이미지"
                >
                  <Image
                    width={200}
                    height={200}
                    style={{ margin: '0px' }}
                    src={imageUrl}
                  ></Image>
                </Card>
                <div style={{ flexGrow: '1' }} />
                <Card
                  title="식물 정보"
                  css={css`
                    ${CardCss}
                  `}
                  style={{
                    maxWidth: '500px',
                    display: 'inline-block',
                  }}
                >
                  <InfoBlock
                    Data={parsedData}
                    viewMore={viewDetailInfo}
                  ></InfoBlock>
                </Card>
                <div style={{ flexGrow: '1' }} />
                <Card
                  title="성분분석 이미지"
                  css={css`
                    ${CardCss}
                  `}
                  style={{
                    maxWidth: '450px',
                    display: 'inline-block',
                  }}
                >
                  <Image height={200} src="https://ifh.cc/g/bTYZS8.png" />
                </Card>
              </div>
            </div>
            <Related url={parsedData.imgs} />
          </div>
        </CenterContainer>
      </CenterContainer>
      <Modal
        visible={ViewDetail}
        onCancel={closeModal}
        title={<b>세부 정보</b>}
        footer={<Button onClick={closeModal}>close</Button>}
      >
        <Detail data={parsedData} />
      </Modal>
    </div>
  );
};

export default Result;
