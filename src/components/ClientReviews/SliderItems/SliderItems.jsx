import {
  CardHeader,
  CardRecvisits,
  ClientCardWrapper,
  ClientName,
  ClientReview,
  ClientRole,
  SliderWrapper,
  StyledSlider,
} from "../ClientReviews.styled";
import ClientsData from "../ClientsData/ClientsData";

import { settings } from "../ClientsData/SliderSettings";

export default function SliderItems() {
  return (
    <>
      <SliderWrapper>
        <StyledSlider {...settings}>
          {ClientsData.map((elem) => {
            return (
              <ClientCardWrapper key={elem.id}>
                <CardHeader>
                  <img src={elem.image} alt={elem.name} />
                  <CardRecvisits>
                    <ClientName>{elem.name}</ClientName>
                    <ClientRole>{elem.role}</ClientRole>
                  </CardRecvisits>
                </CardHeader>
                <ClientReview>{elem.review}</ClientReview>
              </ClientCardWrapper>
            );
          })}
        </StyledSlider>
      </SliderWrapper>
    </>
  );
}
