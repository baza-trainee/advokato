import { ClientsBlockHeader, SectionStyled } from "./ClientsBlock.styled";
import SliderItems from "./SliderItems/SliderItems";
const ClientsBlock = () => {
	
	return(
	<>
	 <SectionStyled>
		<ClientsBlockHeader>Наші клієнти</ClientsBlockHeader>
		<SliderItems/>
	 </SectionStyled>
	</>
	) 
}
export default ClientsBlock;