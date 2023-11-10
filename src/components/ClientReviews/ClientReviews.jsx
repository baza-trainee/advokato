import {
  ClientsBlockHeader,
  Container,
  SectionStyled,
} from "./ClientReviews.styled";
import SliderItems from "./SliderItems/SliderItems";

export const ClientReviews = () => {
  return (
    <>
      <SectionStyled>
        <Container>
          <ClientsBlockHeader>Відгуки</ClientsBlockHeader>
          <SliderItems />
        </Container>
      </SectionStyled>
    </>
  );
};
