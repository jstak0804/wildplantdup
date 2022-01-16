import { Dispatch, SetStateAction } from 'react';

export interface StateInterface {
  AI: boolean;
  imageUrl: string;
  setAI: Dispatch<SetStateAction<boolean>>;
  setImageUrl: Dispatch<SetStateAction<string>>;
}
