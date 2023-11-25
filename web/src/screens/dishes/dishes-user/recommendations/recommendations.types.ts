import { IProduct } from "typings/product";

export interface RecommendationsProps {
  recommendations: IProduct[];
  handleNavigate: (param: string, id: string) => void;
}
