import { Dispatch, SetStateAction } from 'react';

export interface StateInterface {
  AI: boolean;
  imageUrl: string;
  parsedData: any;
  Loader: boolean;
  setAI: Dispatch<SetStateAction<boolean>>;
  setImageUrl: Dispatch<SetStateAction<string>>;
  setParsedData: Dispatch<SetStateAction<any>>;
  setLoader: Dispatch<SetStateAction<boolean>>;
}

export function keyConvert(key: string): string {
  switch (key) {
    case 'name':
      return '식물명';
    case 'literature':
      return '학명';
    case 'categorization':
      return '분류군';
    case 'region':
      return '분포';
    case 'environment':
      return '생육환경';
    case 'height':
      return '크기';
    case 'flower':
      return '꽃';
    case 'fruit':
      return '열매';
    case 'leaf':
      return '잎';
    case 'utilization':
      return '이용 및 활용';
  }
  return '';
}

import axios from 'axios';
export enum ReqError {
  ServerError,
  SelectError,
  SizeError,
  Normal,
  Undefined,
}

class reqResult {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  result: ReqError;
  constructor() {
    this.data = null;
    this.result = ReqError.Normal;
  }
  isNormal(): boolean {
    return this.result === ReqError.Normal;
  }
}

export async function predictRequest(
  imageFile: File,
  value: number,
): Promise<reqResult> {
  const formData = new FormData();
  formData.append('image', imageFile!);
  formData.append('aivalue', value.toString());
  const ret = new reqResult();
  try {
    const rsp = await axios({
      method: 'post',
      url: 'https://prml.insiro.me/api/predict',
      data: formData,
    });
    ret.data = rsp.data;
    return ret;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const status = error.response!.status;
      if (status === 422) {
        ret.result = ReqError.SelectError;
      } else if (status >= 500) {
        ret.result = ReqError.ServerError;
      } else if (status === 413) {
        ret.result = ReqError.SizeError;
      }
    } else {
      ret.result = ReqError.Undefined;
    }
    return ret;
  }
}
