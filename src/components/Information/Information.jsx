import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { getContent } from '../../api';
import { InformationList } from './InformationList';
import { SectionStyled, Container, TitleStyled } from './Information.styled';

export const Information = () => {
  const [t, i18n] = useTranslation('global');
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const result = await getContent('possibilities');
			if (result?.length > 0) {
        setData(prev => result);
      }
    };

    getData();
  }, []);

  return (
    <SectionStyled>
      <Container>
        <TitleStyled>{t('information.title')}</TitleStyled>

        {data?.length > 0 && <InformationList data={data} />}
      </Container>
    </SectionStyled>
  );
};
