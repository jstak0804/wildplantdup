import { Dispatch, SetStateAction } from 'react';

export interface StateInterface {
  AI: boolean;
  imageUrl: string;
  parsedData: any;
  setAI: Dispatch<SetStateAction<boolean>>;
  setImageUrl: Dispatch<SetStateAction<string>>;
  setParsedData: Dispatch<SetStateAction<any>>;
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
