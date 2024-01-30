import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { ResultElement } from './ResultElement';
import {
  Container,
  SectionStyled,
  TitleBlock,
  TitleStyled,
  SubheadingStyled,
  ResultBlock,
} from './Results.styled';

export const Results = () => {
  const [t, i18n] = useTranslation('global');
  const { pathname, hash } = useLocation();
  const ref = useRef();

  useEffect(() => {
    if (hash === '') {
      return window.scrollTo(0, 0);
    }

    if (hash === '#news' && ref.current) {
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
        <TitleBlock>
          <TitleStyled>{t('results.title')}</TitleStyled>
          <SubheadingStyled>{t('results.subTitle')}</SubheadingStyled>
        </TitleBlock>

        <ResultBlock>
          <ResultElement />
        </ResultBlock>
      </Container>
    </SectionStyled>
  );
};
