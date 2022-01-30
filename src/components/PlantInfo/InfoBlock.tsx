import React from 'react';
import { MsgBox } from './MsgBox';
interface Props {
  Data: any;
  viewMore(): void;
}

export const InfoBlock: React.FC<Props> = ({ Data, viewMore }) => {
  return (
    <div style={{ height: '200px', display: 'flex', flexFlow: 'column' }}>
      <div style={{ flexGrow: '1' }}>
        <MsgBox head="이름">{Data.name}</MsgBox>
        <MsgBox head="품종">{Data.categorization}</MsgBox>
        <MsgBox head="학명">{Data.literature}</MsgBox>
      </div>
      <div>
        <div style={{ textAlign: 'right', width: '100%' }}>
          <span style={{ fontSize: '.8rem', color: 'blue' }} onClick={viewMore}>
            ... 더 보기
          </span>
        </div>
      </div>
    </div>
  );
};
