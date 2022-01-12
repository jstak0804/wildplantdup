import React, { useState } from 'react';
import { Button, Row, Layout, Col, Card, Image, Space } from 'antd';
import Related from './Related';
import './App.css';

const Result = ({ imageUrl, onClick }) => {
  return (
    <>
      <meta name="veiwport" content="width=devicewidth, initial-scale=1.0" />
      <Space direction="horizontal" wrap="false" size={'small'}>
        <Row gutter={16}>
          {/* <Col span={24}> */}
          {/* 
          <Button
            type="primary"
            onClick={onClick}
            style={{ marginLeft: '150px', marginTop: '20px' }}
          >
            이미지 다시 선택하기
          </Button> */}
          <Col span={24}>
            <Card
              className="oneCard"
              className="resultCard"
              style={{
                height: '450px',
                padding: '5px',
                minWidth: '100%',
                maxWidth: '100%',
                color: 'gray',
              }}
              bordered={false}
            >
              <Button
                type="primary"
                onClick={onClick}
                style={{
                  float: 'left',
                  marginLeft: '85px',
                }}
              >
                이미지 다시 선택하기
              </Button>
              <p></p>
              <Space direction="horizontal" wrap="True" size={'small'}>
                <Card
                  width="100px"
                  style={{
                    boxShadow: ' 0px 0px 20px 0px gray',
                    minWidth: '330px',
                    maxWidth: '330px',
                    height: '330px',
                    boxShadow: ' 0px 0px 20px 0px gray',
                  }}
                  title="이미지"
                >
                  <Image width={'100%'} height={200} src={imageUrl}></Image>
                </Card>

                <Card
                  title="식물 이미지"
                  style={{
                    minWidth: '500px',
                    maxWidth: '500px',
                    height: '330px',
                    boxShadow: ' 0px 0px 20px 0px gray',
                  }}
                >
                  <Image height={200} src="https://ifh.cc/g/YbTFm6.jpg" />
                </Card>

                <Card
                  title="성분분석 이미지"
                  style={{
                    boxShadow: ' 0px 0px 20px 0px gray',
                    minwidth: '450px',
                    maxwidth: '450px',
                    height: '330px',

                    marginRight: '50px',
                  }}
                >
                  <Image height={200} src="https://ifh.cc/g/bTYZS8.png" />
                </Card>
              </Space>
            </Card>
          </Col>
          {/* </Col> */}
        </Row>
      </Space>
      <Related />
    </>
  );
};

// <Space direction="horizontal" wrap="True" size={'large'}>
//         <Row gutter={16}>
//           {/* <Col span={24}> */}
//           <Col span={7}>
//             <Button type="primary" onClick={onClick}>
//               이미지 다시 선택하기
//             </Button>
//             <Card
//               width="100px"
//               style={{
//                 boxShadow: ' 0px 0px 20px 0px gray',
//                 minWidth: '100%',
//                 maxWidth: '400px',
//                 height: '330px',
//                 boxShadow: ' 0px 0px 20px 0px gray',
//                 marginLeft: '50px',
//                 marginRight: '50px',
//               }}
//               title="이미지"
//             >
//               <Image width={'100%'} height={200} src={imageUrl}></Image>
//             </Card>
//           </Col>
//           <Col span={10}>
//             <Card
//               title="식물 이미지"
//               style={{
//                 minWidth: '100%',
//                 maxWidth: '500px',
//                 height: '330px',
//                 boxShadow: ' 0px 0px 20px 0px gray',
//                 marginTop: '55px',
//                 marginLeft: '50px',
//                 marginRight: '50px',
//               }}
//             >
//               <Image height={200} src="https://ifh.cc/g/YbTFm6.jpg" />
//             </Card>
//           </Col>
//           <Col span={7}>
//             <Card
//               title="성분분석 이미지"
//               style={{
//                 boxShadow: ' 0px 0px 20px 0px gray',
//                 minwidth: '100%',
//                 maxwidth: '400px',
//                 height: '330px',
//                 marginTop: '55px',
//                 marginRight: '50px',
//                 marginLeft: '50px',
//               }}
//             >
//               <Image height={200} src="https://ifh.cc/g/bTYZS8.png" />
//             </Card>
//           </Col>
//           {/* </Col> */}
//         </Row>
export default Result;
