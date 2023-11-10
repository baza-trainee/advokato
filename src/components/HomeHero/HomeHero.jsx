import {
  SectionStyled,
  Container,
  MainTitleStyled,
  SubtitleStyled,
} from './HomeHero.styled';
import { useTranslation } from 'react-i18next';

export const HomeHero = () => {
  const [t, i18n] = useTranslation('global');

  return (
    <SectionStyled>
      <Container>
        <MainTitleStyled>
          <span>
            {t('titleText1')},&nbsp;
            {t('titleText2')},
          </span>
          {t('titleText3')}
        </MainTitleStyled>

        <div>
          <SubtitleStyled>{t('subTitleText2')}</SubtitleStyled>
          <SubtitleStyled>{t('subTitleText1')}</SubtitleStyled>
        </div>
      </Container>
    </SectionStyled>
  );
};
