import React from 'react';
import { Modal as AntModal, Button } from 'antd';
import { ReqError } from './utils';

interface MsgProps {
  imageUrl: string;
  value: number;
  reqError: ReqError;
}

const ModalMsgDiv: React.FC = ({ children }) => {
  return <div style={{ margin: '1rem' }}>{children}</div>;
};

const ModalMsg: React.FC<MsgProps> = ({ imageUrl, value, reqError }) => {
  if (reqError === ReqError.SizeError)
    return <ModalMsgDiv>이미지가 너무 큽니다.</ModalMsgDiv>;
  if (reqError === ReqError.ServerError)
    return <ModalMsgDiv>서버가 응답하지 않습니다</ModalMsgDiv>;
  if (reqError === ReqError.Undefined)
    return <ModalMsgDiv>알 수 없는 에러가 발생되었습니다</ModalMsgDiv>;
  if (reqError === ReqError.SelectError)
    return (
      <React.Fragment>
        <ModalMsgDiv>현재 이미지의 항목이 올바르지 않습니다</ModalMsgDiv>
        <ModalMsgDiv>항목을 다시 선택해 주십시오</ModalMsgDiv>
      </React.Fragment>
    );
  return (
    <React.Fragment>
      {imageUrl === '' ? (
        <ModalMsgDiv>이미지가 선택되지 않았습니다.</ModalMsgDiv>
      ) : (
        ''
      )}
      {value !== 4 ? (
        ''
      ) : (
        <ModalMsgDiv>분류가 선택되지 않았습니다.</ModalMsgDiv>
      )}
    </React.Fragment>
  );
};

interface Props {
  visible: boolean;
  onCancel: any;
}

const Modal: React.FC<Props & MsgProps> = ({
  visible,
  onCancel,
  imageUrl,
  value,
  reqError,
}) => {
  return (
    <AntModal
      visible={visible}
      onCancel={onCancel}
      footer={<Button onClick={onCancel}>close</Button>}
    >
      <ModalMsg imageUrl={imageUrl} value={value} reqError={reqError} />
    </AntModal>
  );
};
export default Modal;
