import React from 'react';
import { Button, Image, Modal } from 'antd';
import { Card } from '../../components/Card';
import CenterContainer from '../../components/CenterContainer';
import Related from './Related';
import { StateInterface } from '../../util';
import ArrowLeftOutlined from '@ant-design/icons/lib/icons/ArrowLeftOutlined';
import { InfoBlock, Detail } from '../../components/PlantInfo';
import { FloatView } from './FloatView';
interface Props {
  state: StateInterface;
}

const cardStyle: React.CSSProperties = {
  height: '330px',
  margin: '10px',
  marginTop: '10px',
  minWidth: '300px',
  display: 'inline-block',
};

// eslint-disable-next-line react/prop-types
const Result: React.FC<Props> = ({ state }) => {
  const { imageUrl, parsedData, setImageUrl, setAI } = state;
  const [ViewDetail, setViewDetail] = React.useState(false);
  const [chemicalView, setChemicalView] = React.useState(false);
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
  const openChamical = () => {
    setChemicalView(true);
  };
  const closeChemical = () => {
    setChemicalView(false);
  };
  return (
    <div
      style={{
        marginBottom: '20px',
        height: '100%',
      }}
    >
      <CenterContainer direction="row" display={!chemicalView}>
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
                  bodyStyle={{
                    padding: '10px',
                  }}
                  style={{
                    minWidth: '220px',
                    maxWidth: '330px',
                    display: 'inline-block',
                    textAlign: 'center',
                    ...cardStyle,
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
                  style={{
                    maxWidth: '520px',
                    display: 'inline-block',
                    ...cardStyle,
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
                  style={{
                    maxWidth: '480px',
                    display: 'inline-block',
                    textAlign: 'center',
                    ...cardStyle,
                  }}
                >
                  <Image height={200} src={parsedData.chemical[0]} />
                  <div style={{ width: '100%', textAlign: 'right' }}>
                    <span
                      style={{ fontSize: '.8rem', color: 'blue' }}
                      onClick={openChamical}
                    >
                      모두 보기
                    </span>
                  </div>
                </Card>
              </div>
            </div>
            <Related url={parsedData.imgs} />
          </div>
        </CenterContainer>
      </CenterContainer>
      <FloatView
        display={chemicalView}
        closeAction={closeChemical}
        chemical_images={parsedData.chemical}
      />
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
