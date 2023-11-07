import { ClientsBlockHeader, SectionStyled } from "./ClientReviews.styled";
import SliderItems from "./SliderItems/SliderItems";

export const ClientReviews = () => {
  return (
    <>
      <SectionStyled>
        <ClientsBlockHeader>Відгуки</ClientsBlockHeader>
        <SliderItems />
      </SectionStyled>
    </>
  );
};
