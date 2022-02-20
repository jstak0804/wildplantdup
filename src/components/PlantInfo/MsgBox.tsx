import React from 'react';
interface MsgProps {
  head: string;
}
export const MsgBox: React.FC<MsgProps> = ({ head, children }) => {
  return (
    <div>
      ▶ {head} : {children}
    </div>
  );
};
