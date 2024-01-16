import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { isObjectEmpty } from '../../helpers';
import { getContent } from '../../api/fetchContent';
import { SliderItems } from './SliderItems/SliderItems';
import { Icon } from '../Icon';
import {
	ClientsBlockHeader,
	Container, LeftSliderArrow, RightSliderArrow,
	SectionStyled,
	SliderArrow,
	SliderWrapper,
} from "./ClientReviews.styled";

export const ClientReviews = () => {
  const [t, i18n] = useTranslation('global');
  const ref = useRef();
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      const data = await getContent('reviews');

      if (!isObjectEmpty(data)) {
        setData(data);
      }
    };

    getData();
  }, []);

  return (
    <SectionStyled>
      <Container>
        <ClientsBlockHeader>{t('clientsReviews.title')}</ClientsBlockHeader>
      </Container>

      {data?.length > 0 && (
        <SliderWrapper>
          <LeftSliderArrow>
            <button
              aria-label="Перелистування слайдера вліво"
              type="button"
              onClick={e => ref.current.go('-1')}
            >
              <Icon id={'icon-slider-arrow-left'} width={60} height={60} />
            </button>
          </LeftSliderArrow>

          <SliderItems ref={ref} data={data} />

          <RightSliderArrow>
            <button
              aria-label="Перелистування слайдера вправо"
              type="button"
              onClick={e => ref.current.go('+1')}
            >
              <Icon id={'icon-slider-arrow-right'} width={60} height={60} />
            </button>
          </RightSliderArrow>
        </SliderWrapper>
      )}
    </SectionStyled>
  );
};
