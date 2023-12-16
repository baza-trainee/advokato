import { useState, useEffect, useRef } from 'react';

import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { practiceArray } from './practiceArray';
// import { parseToParagraphs } from '../../helpers';
import { PracticeList } from './PracticeList';
import { ButtonConsultation } from '../ButtonConsultation';
import {
  SectionStyled,
  Container,
  TitleStyled,
  PracticeWrp,
  PracticeInfo,
  ImageStyled,
  PracticeTitle,
  PracticeDescWrp,
  PracticeDesc,
  MoreButtonStyled,
} from './Practice.styled';

export const Practice = () => {
  const [t, i18n] = useTranslation('global');
  const { hash } = useLocation();
  const [currentPractice, setCurrentPractice] = useState(practiceArray[0]);
  const [isShowMoreDesc, setIsShowMoreDesc] = useState(false);
  const ref = useRef();

  useEffect(() => {
    if (hash === '') {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        ref.current.scrollIntoView({
          block: 'start',
          inline: 'nearest',
          behavior: 'smooth',
        });
      }, 0);
    }
  }, [hash]);

  if (practiceArray.length > 0) {
    return (
      <SectionStyled ref={ref}>
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

              <PracticeDescWrp>
                <PracticeDesc isShowMoreDesc={isShowMoreDesc}>
                  {currentPractice?.desc}
                </PracticeDesc>

                {isShowMoreDesc && (
                  <PracticeDesc>{currentPractice?.extraInfo}</PracticeDesc>
                )}

                {currentPractice?.extraInfo && (
                  <MoreButtonStyled
                    onClick={() => setIsShowMoreDesc(prev => !prev)}
                    type="button"
                    aria-label="read more info"
                  >
                    {isShowMoreDesc
                      ? t('practiceSection.hideButton')
                      : t('practiceSection.moreButton')}
                  </MoreButtonStyled>
                )}
              </PracticeDescWrp>

              <ButtonConsultation />
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
