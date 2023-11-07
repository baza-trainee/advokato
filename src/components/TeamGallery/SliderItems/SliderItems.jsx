import TeamData from "../TeamData/TeamData";
import { settings } from "../TeamData/SliderSettings";
import {
  CardName,
  CardRole,
  SliderWrapper,
  StyledSlider,
  TeamMateCardWrapper,
} from "../TeamGallery.styled";

export default function SliderItems() {
  return (
    <>
      <SliderWrapper>
        <StyledSlider {...settings}>
          {TeamData.map((elem) => {
            return (
                <TeamMateCardWrapper key={elem.id}>
                  <img src={elem.image} alt={elem.name} />
                  <CardName>{elem.name}</CardName>
                  <CardRole>
                    {elem.role}
                    <hr />
                  </CardRole>
                </TeamMateCardWrapper>
            );
          })}
        </StyledSlider>
      </SliderWrapper>
    </>
  );
}
