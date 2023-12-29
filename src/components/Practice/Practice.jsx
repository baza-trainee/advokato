import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
<<<<<<< HEAD
=======
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';
>>>>>>> dev

import { isObjectEmpty } from '../../helpers';
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
  const { pathname, hash } = useLocation();
  const [isShowMoreDesc, setIsShowMoreDesc] = useState(false);
  const ref = useRef();
  const [practices, setPractices] = useState([]);
  const [currentPractice, setCurrentPractice] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getContent('specializations');

      if (!isObjectEmpty(data)) {
        setPractices(prev => data);
        setCurrentPractice(prev => data[0]);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    if (hash === '') {
      return window.scrollTo(0, 0);
    }

    if (hash === '#practice') {
      setTimeout(() => {
        ref.current.scrollIntoView({
          block: 'start',
          inline: 'nearest',
          behavior: 'smooth',
        });
      }, 0);
    }
  }, [pathname, hash]);

<<<<<<< HEAD
  const createMarkup = htmlString => ({ __html: htmlString });
=======
  const sanitizedMarkup = DOMPurify.sanitize(
    currentPractice?.specialization_description_full
  );
>>>>>>> dev

  const handleClickMoreButton = () => {
    setIsShowMoreDesc(prev => !prev);

    if (isShowMoreDesc) {
      ref.current.scrollIntoView({
        block: 'start',
        inline: 'nearest',
        behavior: 'smooth',
      });
    }
  };

  return (
    <SectionStyled ref={ref}>
      <Container>
        <TitleStyled>
          Злагоджена команда юристів Status здатна вирішувати складні завдання у
          різних сферах.
        </TitleStyled>

        {practices.length > 0 && (
          <PracticeWrp>
            <PracticeInfo>
              <ImageStyled
                src={currentPractice?.specialization_photo}
                width={456}
                height={320}
                alt="тематичне зображення до категорії"
              />

              <PracticeTitle>
                {currentPractice?.specialization_name}
              </PracticeTitle>

              <PracticeDescWrp>
                <PracticeDesc isShowMoreDesc={isShowMoreDesc}>
                  {currentPractice?.specialization_description}
                </PracticeDesc>

                {isShowMoreDesc && (
<<<<<<< HEAD
                  <PracticeDescFull
                    dangerouslySetInnerHTML={createMarkup(
                      currentPractice?.specialization_description_full
                    )}
                  />
=======
                  <PracticeDescFull>{parse(sanitizedMarkup)}</PracticeDescFull>
>>>>>>> dev
                )}

                {currentPractice?.specialization_description_full && (
                  <MoreButtonStyled
                    onClick={handleClickMoreButton}
                    type="button"
                    aria-label="прочитати більше інформації"
                  >
                    {isShowMoreDesc
                      ? t('practiceSection.hideButton')
                      : t('practiceSection.moreButton')}
                  </MoreButtonStyled>
                )}
              </PracticeDescWrp>

              <ButtonConsultation
                customStyles={{
                  padding: '16px 24px',
                  width: '288px',
                  height: '52px',
                }}
              />
            </PracticeInfo>

            <PracticeList
              practices={practices}
              currentPractice={currentPractice}
              setCurrentPractice={setCurrentPractice}
            />
          </PracticeWrp>
        )}
      </Container>
    </SectionStyled>
  );
};
