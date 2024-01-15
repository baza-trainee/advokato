import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { isObjectEmpty } from '../../helpers';
import { getContent } from "../../api/index.js";
import { SliderItems } from './SliderItems/SliderItems';
import { Icon } from '../Icon';
import {
  Container,
  SectionStyled,
  SliderArrow,
  TeamBlockHeader,
  TeamBlockSubTitle,
  TeamSliderContainer,
} from './TeamGallery.styled';

export const TeamGallery = () => {
  const [t, i18n] = useTranslation('global');
  const arrowRef = useRef();
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      const data = await getContent('our-team');
      if (!isObjectEmpty(data)) {
        setData(data.team);
      }
    };

    getData();
  }, []);

  return (
    <SectionStyled>
      <Container>
        <TeamBlockHeader>{t('team.title')}</TeamBlockHeader>

        <TeamBlockSubTitle>{t('team.subTitle')}</TeamBlockSubTitle>
      </Container>

      {data?.length > 0 && (
        <TeamSliderContainer>
          <SliderArrow>
            <button
              aria-label="Перелистування слайдера вліво"
              onClick={() => arrowRef.current.go('-1')}
              type="button"
            >
              <Icon id={'icon-slider-arrow-left'} width='20px' height="20px"/>
            </button>
          </SliderArrow>

          <SliderItems ref={arrowRef} data={data} />

          <SliderArrow>
            <button
              aria-label="Перелистування слайдера вправо"
              onClick={() => arrowRef.current.go('+1')}
              type="button"
            >
              <Icon id={'icon-slider-arrow-right'} width={60} height={60} />
            </button>
          </SliderArrow>
        </TeamSliderContainer>
      )}
    </SectionStyled>
  );
};
