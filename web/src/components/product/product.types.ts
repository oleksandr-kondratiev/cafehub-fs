export interface ProductProps {
  props: {
    id?: string;
    name: string;
    description: string;
    productImage: string;
    price: number;
    weight: number;
  };

  param: string;
  handleNavigate: (param: string, id: string) => void;
  handleAddCartNumber?: (id: string) => void;
}
