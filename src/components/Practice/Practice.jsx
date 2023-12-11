import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { practiceArray } from './practiceArray';
import { parseToParagraphs } from '../../helpers';
import { Modal } from '../Modal';
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
  ExtraInfoWrpStyled,
} from './Practice.styled';
export const Practice = () => {
  const { pathname, hash, key } = useLocation();
  const [currentPractice, setCurrentPractice] = useState(practiceArray[0]);
  const [modalActive, setModalActive] = useState(false);

  useEffect(() => {
    if (hash === '') {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            block: 'start',
            inline: 'nearest',
            behavior: 'smooth',
          });
        }
      }, 0);
    }
  }, [pathname, hash, key]);

  useEffect(() => {
    if (!modalActive) {
      document.body.style.overflowY = 'auto';
    }
  }, [modalActive]);

  if (practiceArray.length > 0) {
    return (
      <SectionStyled id="practice">
        {modalActive && (
          <Modal active={modalActive} setActive={setModalActive}>
            {currentPractice.extraInfo !== '' ? (
              <ExtraInfoWrpStyled>
                {parseToParagraphs(currentPractice.extraInfo)}
              </ExtraInfoWrpStyled>
            ) : (
              <p>no text</p>
            )}
          </Modal>
        )}

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
                onClick={() => setModalActive(true)}
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
