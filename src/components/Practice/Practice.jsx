import { useState } from 'react';

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
} from './Practice.styled';
export const Practice = () => {
  const [currentPractice, setCurrentPractice] = useState(practiceArray[0]);

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
