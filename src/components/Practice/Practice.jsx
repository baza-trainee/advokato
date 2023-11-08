import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { practiceArray } from './practiceArray';
import { PracticeList } from './PracticeList';
import {
  SectionStyled,
  Container,
  TitleStyled,
  PracticeWrp,
  PracticeInfo,
  ImageStyled,
  PracticeTitle,
  PracticeDesc,
  ButtonStyled,
} from './Practice.styled';
export const Practice = () => {
  const [currentPractice, setCurrentPractice] = useState(practiceArray[0]);
  const navigate = useNavigate();

  const handleClickProductCard = () => {
    navigate('/practice#civilProcess', {
      state: currentPractice,
    });
  };

  if (practiceArray.length > 0) {
    return (
      <SectionStyled>
        <Container>
          <TitleStyled>
            Злагоджена команда юристів Status здатна вирішувати складні завдання
            у різних сферах.
          </TitleStyled>

          <PracticeWrp>
            <PracticeInfo>
              <ImageStyled
                src={currentPractice?.imageUrl}
                width={456}
                height={320}
                alt="picture about practice"
              />

              <PracticeTitle>{currentPractice?.title}</PracticeTitle>

              <PracticeDesc>{currentPractice?.desc}</PracticeDesc>

              <ButtonStyled
                onClick={handleClickProductCard}
                type="button"
                aria-label="read more info"
              >
                Детальніше
              </ButtonStyled>
            </PracticeInfo>

            <PracticeList
              practiceArray={practiceArray}
              currentPractice={currentPractice}
              setCurrentPractice={setCurrentPractice}
            />
          </PracticeWrp>
        </Container>
      </SectionStyled>
    );
  }
};
