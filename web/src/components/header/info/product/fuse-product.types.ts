import { NavigateFunction } from "react-router-dom";

export interface FuseProductProps {
  id: string;
  productImage: string;
  name: string;
  description: string;
  setTargetValue: React.Dispatch<React.SetStateAction<string>>;
  navigate: NavigateFunction;
}
