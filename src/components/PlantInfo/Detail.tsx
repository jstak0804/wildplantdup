import React from 'react';
import { BigMsgBox } from './BigMsgBox';
interface Props {
  data: any;
}

export const Detail: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <BigMsgBox head="이름">{data.name}</BigMsgBox>
      <BigMsgBox head="학명">{data.literature}</BigMsgBox>
      <BigMsgBox head="분류군">{data.categorization}</BigMsgBox>
      <BigMsgBox head="분포">{data.region}</BigMsgBox>
      <BigMsgBox head="생육환경">{data.environment}</BigMsgBox>
      <BigMsgBox head="크기">{data.height}</BigMsgBox>
      <BigMsgBox head="꽃">{data.flower}</BigMsgBox>
      <BigMsgBox head="열매">{data.fruit}</BigMsgBox>
      <BigMsgBox head="잎">{data.leaf}</BigMsgBox>
      <BigMsgBox head="이용 및 활용">{data.utilization}</BigMsgBox>
      <BigMsgBox head="출처">
        국가생물종지식정보시스템, 국립생물자원관
      </BigMsgBox>
    </div>
  );
};
