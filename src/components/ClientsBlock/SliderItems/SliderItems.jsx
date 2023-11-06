import { ClientsData } from "../ClientsData/ClientsData";



import {settings} from "../ClientsData/SliderSettings"
import {  SliderWrapper, StyledSlider } from "../ClientsBlock.styled";


export default function SliderItems() {
  return (
    <>
      <SliderWrapper>
    <StyledSlider {...settings}>
    {ClientsData.map(elem=>{
      return(
          <img key={elem.id} src={elem.image} alt={elem.title} />
          )
        })
      }
    </StyledSlider>
      </SliderWrapper>
    </>
  )
}
