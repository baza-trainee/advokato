import { ClientsBlockHeader, SectionStyled } from "./ClientsBlock.styled";
import SliderItems from "./SliderItems/SliderItems";

export const ClientsBlock = () => {
  return (
    <>
      <SectionStyled>
        <ClientsBlockHeader>Наші клієнти</ClientsBlockHeader>
        <SliderItems />
      </SectionStyled>
    </>
  );
};
