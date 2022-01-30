import React from 'react';
import { Divider } from 'antd';
interface MsgProps {
  head: string;
}
export const MsgBox: React.FC<MsgProps> = ({ head, children }) => {
  return (
    <div>
      <Divider orientation="left" style={{ margin: '10px' }}>
        {head}
      </Divider>
      {children}
    </div>
  );
};
