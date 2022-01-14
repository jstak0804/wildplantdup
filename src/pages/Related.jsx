import React from 'react';
import { Row, Col, Card, Image, Space } from 'antd';

function Related() {
  return (
    <Row>
      <Col span={24}>
        <Card
          className="resultCard"
          title="해당 식물 관련 이미지"
          style={{
            boxShadow: ' 0px 0px 20px 0px gray',
            alignContent: 'center',
            alignSelf: 'center',
            alignItems: 'cemter',
            height: '330px',
            minWidth: '1323px',
            maxWidth: '1323px',
            marginTop: '5px',
            marginLeft: '185px',
          }}
        >
          <Image.PreviewGroup margin={5} padding={10}>
            <Space size={'large'}>
              <Image
                width={200}
                height={200}
                margin={15}
                src="https://ifh.cc/g/RWIPum.jpg"
              />

              <Image
                width={200}
                height={200}
                src="https://ifh.cc/g/LQC5ir.jpg"
              />

              <Image
                width={200}
                height={200}
                src="https://ifh.cc/g/csKH16.jpg"
              />

              <Image
                width={200}
                height={200}
                src="https://ifh.cc/g/xzitCO.jpg"
              />

              <Image
                width={200}
                height={200}
                src="https://ifh.cc/g/Q7geji.jpg"
              />
            </Space>
          </Image.PreviewGroup>
        </Card>
      </Col>
    </Row>
  );
}
export default Related;
