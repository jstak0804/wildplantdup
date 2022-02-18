/**@jsxRuntime classic */
/** @jsx jsx*/
import React from 'react';
import { jsx } from '@emotion/react';
import { Card as AntCard, CardProps } from 'antd';

interface Prop {
  title?: string;
  bodyStyle?: object;
}

export const Card: React.FC<Prop & CardProps> = ({
  children,
  title,
  bodyStyle,
  ...props
}) => {
  return (
    <AntCard
      bodyStyle={bodyStyle}
      headStyle={{
        textAlign: 'center',
        borderTopLeftRadius: '22px',
        borderTopRightRadius: '22px',
        backgroundColor: 'rgba(220, 220, 220, 0.616)',
      }}
      title={title}
      {...props}
    >
      {children}
    </AntCard>
  );
};

export default Card;
