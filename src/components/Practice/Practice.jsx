import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { isObjectEmpty } from '../../helpers';
import { PracticeList } from './PracticeList';
import { getContent } from '../../api';
import {
	SectionStyled,
	Container,
	TitleStyled,
	PracticeWrp, PracticeDesktopWrapper,
} from "./Practice.styled";
import PracticeBlock from "./PracticeBlock/PracticeBlock.jsx";

export const Practice = () => {
  const [t, i18n] = useTranslation('global');
  const { pathname, hash } = useLocation();
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
			window.scrollTo(0, 0);
			return;
		}

		if (hash === '#practice' && ref.current) {
			requestAnimationFrame(() => {
				setTimeout(() => {
					ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
				}, 600);
			});
		}
	}, [pathname, hash]);


  return (
    <SectionStyled ref={ref}>
      <Container>
        <TitleStyled>{t('practiceSection.title')}</TitleStyled>

        {practices.length > 0 && (
          <PracticeWrp>
						<PracticeDesktopWrapper>
							<PracticeBlock currentPractice={currentPractice}/>
						</PracticeDesktopWrapper>

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
