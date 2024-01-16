import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { getContent } from '../../api';
import { isObjectEmpty } from '../../helpers';
import { SliderItems } from './SliderItems/SliderItems';
import { Icon } from '../Icon';
import {
	ClientsBlockHeader,
	ClientsSliderContainer,
	Container, LeftSliderArrow, RightSliderArrow,
	SectionStyled,
	SliderArrow,
} from "./ClientsBlock.styled";

export const ClientsBlock = () => {
  const [t, i18n] = useTranslation('global');
  const arrowRef = useRef();
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      const data = await getContent('clients');

      if (!isObjectEmpty(data)) {
        setData(data);
      }
    };

    getData();
  }, []);

  return (
    <SectionStyled>
      <Container>
        <ClientsBlockHeader>{t('clients.title')}</ClientsBlockHeader>
      </Container>

      {data?.length > 0 && (
        <ClientsSliderContainer>
          <LeftSliderArrow>
            <button
              aria-label="Перелистування слайдера вліво"
              onClick={() => arrowRef.current.go('-1')}
              type="button"
            >
              <Icon id={'icon-slider-arrow-left'} width={60} height={60} />
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
        </ClientsSliderContainer>
      )}
    </SectionStyled>
  );
};
