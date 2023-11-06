import { ClientsBlockHeader, Container, SectionStyled, SliderWrapper } from "./ClientsBlock.styled";
import SliderItems from "./SliderItems/SliderItems";



import arrowLeft from "../../images/ClientsBlock/arrowLeft.png"
// import arrowRight from "../../images/ClientsBlock/arrowRight.png"


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