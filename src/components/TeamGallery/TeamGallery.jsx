import {
	Container,
	LeftSliderArrow,
	RightSliderArrow,
	SectionStyled,
	TeamBlockHeader,
	TeamBlockSubTitle,
	TeamSliderContainer,
} from "./TeamGallery.styled";
import { useEffect, useRef, useState } from 'react';

import { Icon } from '../Icon';
import { SliderItems } from './SliderItems/SliderItems';
import { getContent } from "../../api/index.js";
import { isObjectEmpty } from '../../helpers';
import { useTranslation } from 'react-i18next';

export const TeamGallery = () => {
  const [t, i18n] = useTranslation('global');
  const arrowRef = useRef();
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      const data = await getContent('/our-team?is_slider=true');
      if (!isObjectEmpty(data)) {
        setData(data);
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
          <LeftSliderArrow>
            <button
              aria-label="Перелистування слайдера вліво"
              onClick={() => arrowRef.current.go('-1')}
              type="button"
            >
              <Icon id={'icon-slider-arrow-left'} width='20px' height="20px"/>
            </button>
          </LeftSliderArrow>

          <SliderItems ref={arrowRef} data={data} />

          <RightSliderArrow>
            <button
              aria-label="Перелистування слайдера вправо"
              onClick={() => arrowRef.current.go('+1')}
              type="button"
            >
              <Icon id={'icon-slider-arrow-right'} width={60} height={60} />
            </button>
          </RightSliderArrow>
        </TeamSliderContainer>
      )}
    </SectionStyled>
  );
};
