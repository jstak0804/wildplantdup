import React from 'react';
interface MsgProps {
  head: string;
}
export const MsgBox: React.FC<MsgProps> = ({ head, children }) => {
  return (
    <div style={{ margin: '1.5rem' }}>
      ▶ {head} : {children}
    </div>
  );
};
