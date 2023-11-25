import { Product } from "@components/product/product";

import { RecommendationsProps } from "./recommendations.types";

import {
  RecommendationProductWrapper,
  RecommendationsWrapper,
} from "./recommendation.styles";

export const Recommendations = ({
  recommendations,
  handleNavigate,
}: RecommendationsProps) => {
  return (
    <RecommendationsWrapper>
      Tastes best with:
      <RecommendationProductWrapper>
        {recommendations.map((recommendation) => (
          <Product
            key={recommendation.id}
            props={recommendation}
            param="product"
            handleNavigate={handleNavigate}
          />
        ))}
      </RecommendationProductWrapper>
    </RecommendationsWrapper>
  );
};
