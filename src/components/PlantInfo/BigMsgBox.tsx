import React from 'react';
interface MsgProps {
  head: string;
}
export const BigMsgBox: React.FC<MsgProps> = ({ head, children }) => {
  return (
    <div>
      <span style={{ fontWeight: 'bold' }}>{head}</span>
      <br />
      <span>{children}</span>
      <br />
      <br />
    </div>
  );
};
