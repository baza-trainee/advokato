import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { parseToParagraphs } from '../../helpers';
import { PracticeList } from './PracticeList';
import { ButtonConsultation } from '../ButtonConsultation';
import { getContent } from '../../api';
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
  PracticeDescFull,
  MoreButtonStyled,
} from './Practice.styled';

export const Practice = () => {
  const [t, i18n] = useTranslation('global');
  const { hash } = useLocation();
  const [isShowMoreDesc, setIsShowMoreDesc] = useState(false);
  const refPractice = useRef();
  const [practices, setPractices] = useState([]);
  const [currentPractice, setCurrentPractice] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getContent('specializations');

      setPractices(prev => data);
      setCurrentPractice(prev => data[0]);
    };

    getData();
  }, []);

  useEffect(() => {
    if (hash === '') {
      return window.scrollTo(0, 0);
    }

    if (hash === '#practice') {
      setTimeout(() => {
        refPractice.current.scrollIntoView({
          block: 'start',
          inline: 'nearest',
          behavior: 'smooth',
        });
      }, 0);
    }
  }, [hash]);

  const createMarkup = htmlString => ({ __html: htmlString });

  if (practices.length > 0) {
    return (
      <SectionStyled ref={refPractice}>
        <Container>
          <TitleStyled>
            Злагоджена команда юристів Status здатна вирішувати складні завдання
            у різних сферах.
          </TitleStyled>

          <PracticeWrp>
            <PracticeInfo>
              <ImageStyled
                src={currentPractice?.specialization_photo}
                width={456}
                height={320}
                alt="picture about practice"
              />

              <PracticeTitle>
                {currentPractice?.specialization_name}
              </PracticeTitle>

              <PracticeDescWrp>
                <PracticeDesc isShowMoreDesc={isShowMoreDesc}>
                  {currentPractice?.specialization_description}
                </PracticeDesc>
                {/* 
                {isShowMoreDesc && (
                  <PracticeDescFull>
                    {parseToParagraphs(
                      currentPractice?.specialization_description_full
                    )}
                  </PracticeDescFull>
                )} */}

                {isShowMoreDesc && (
                  <PracticeDescFull
                    dangerouslySetInnerHTML={createMarkup(
                      currentPractice?.specialization_description_full
                    )}
                  />
                )}

                {currentPractice?.specialization_description_full && (
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
              practices={practices}
              currentPractice={currentPractice}
              setCurrentPractice={setCurrentPractice}
            />
          </PracticeWrp>
        </Container>
      </SectionStyled>
    );
  }
};
