import { useState, useEffect } from 'react';

import { getContent } from '../../api';
import { InformationList } from './InformationList';
import { SectionStyled, Container, TitleStyled } from './Information.styled';

export const Information = () => {
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
        <TitleStyled>
          Ми самостійно здійснюємо представництво ваших інтересів
        </TitleStyled>

        {data?.length > 0 && <InformationList data={data} />}
      </Container>
    </SectionStyled>
  );
};
