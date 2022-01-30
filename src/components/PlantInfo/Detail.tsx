import React from 'react';
import { MsgBox } from './MsgBox';
interface Props {
  data: any;
}

export const Detail: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <MsgBox head="이름">{data.name}</MsgBox>
      <MsgBox head="학명">{data.literature}</MsgBox>
      <MsgBox head="분류군">{data.categorization}</MsgBox>
      <MsgBox head="분포">{data.region}</MsgBox>
      <MsgBox head="생육환경">{data.environment}</MsgBox>
      <MsgBox head="크기">{data.height}</MsgBox>
      <MsgBox head="꽃">{data.flower}</MsgBox>
      <MsgBox head="열매">{data.fruit}</MsgBox>
      <MsgBox head="잎">{data.leaf}</MsgBox>
      <MsgBox head="이용 및 활용">{data.utilization}</MsgBox>
      <MsgBox head="출처">국가생물종지식정보시스템, 국립생물자원관</MsgBox>
    </div>
  );
};
