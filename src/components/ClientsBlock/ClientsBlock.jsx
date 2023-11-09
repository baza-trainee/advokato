import {
  ClientsBlockHeader,
  Container,
  SectionStyled,
} from "./ClientsBlock.styled";
import SliderItems from "./SliderItems/SliderItems";

export const ClientsBlock = () => {
  return (
    <>
      <SectionStyled>
        <Container>
          <ClientsBlockHeader>Наші клієнти</ClientsBlockHeader>
          <SliderItems />
        </Container>
      </SectionStyled>
    </>
  );
};
