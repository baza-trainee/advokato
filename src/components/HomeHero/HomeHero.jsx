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
        {t('titleText')}
        </MainTitleStyled>

        <div>
          <SubtitleStyled>{t('subTitleText2')}</SubtitleStyled>
          <SubtitleStyled>{t('subTitleText1')}</SubtitleStyled>
        </div>
      </Container>
    </SectionStyled>
  );
};
