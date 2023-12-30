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

// <CardWraper>
// <ImgWraper>
//   <picture>
// 	<source
// 	  srcSet={`${ImgFstWp}, ${ImgFst2Wp} 2x`}
// 	  type="image/webp"
// 	/>
// 	<source
// 	  srcSet={`${ImgFstDefault}, ${ImgFst2x} 2x`}
// 	  type="image/jpeg"
// 	/>
// 	<img
// 	  src={ImgFstDefault}
// 	  width={548}
// 	  height={388}
// 	  alt="ділова розмова за столом"
// 	/>
//   </picture>
// </ImgWraper>
// <Text>
//   Адвокатська компанія {`"Статус"`} пропонує найвищий рівень юридичних
//   послуг і консультацій для наших клієнтів. Ми горді надавати широкий
//   спектр юридичних послуг, спеціалізовані наші адвокати і завжди
//   готові допомогти вам у вирішенні вашого правового питання.
// </Text>
// <Column
//   width="500px"
//   left="-72px"
//   title="Професіоналізм і досвід"
//   text="Наша команда складається з досвідчених адвокатів, які мають глибокі знання в різних галузях права. Ми ретельно аналізуємо кожну ситуацію і надаємо вам найкращі правові рішення."
// />
// </CardWraper>

// <CardWraper>
// <Text>
//   Наша команда володіє унікальними можливостями, щоб допомогти нашим
//   клієнтам вирішувати їх найскладніші юридичні проблеми, незалежно від
//   їх місця виникнення та знаходження клієнтів. <br /> <br /> Ми —
//   команда молодих, амбітних і цілеспрямованих юристів, для яких
//   головним пріоритетом є час наших клієнтів, порядність,
//   відповідальність і досягнення поставлених цілей.
// </Text>
// <ImgWraper>
//   <picture>
// 	<source
// 	  srcSet={`${ImgScnWp}, ${ImgScn2Wp} 2x`}
// 	  type="image/webp"
// 	/>
// 	<source
// 	  srcSet={`${ImgScnDefault}, ${ImgScn2x} 2x`}
// 	  type="image/jpeg"
// 	/>
// 	<img
// 	  src={ImgScnDefault}
// 	  width={548}
// 	  height={388}
// 	  alt="розмова з клієнтом"
// 	/>
//   </picture>
// </ImgWraper>
// <Column
//   width="520px"
//   left="480px"
//   title="Індивідуальний підхід"
//   text="Ми розуміємо, що кожна справа унікальна, і ми ставимося до неї з особливою увагою. Наші адвокати працюють з вами один на один, допомагаючи зрозуміти ваші потреби та цілі."
// />
// </CardWraper>

// <CardWraper>
// <ImgWraper>
//   <picture>
// 	<source
// 	  srcSet={`${ImgThdWp}, ${ImgThd2Wp} 2x`}
// 	  type="image/webp"
// 	/>
// 	<source
// 	  srcSet={`${ImgThdDefault}, ${ImgThd2x} 2x`}
// 	  type="image/jpeg"
// 	/>
// 	<img
// 	  src={ImgThdDefault}
// 	  width={548}
// 	  height={388}
// 	  alt="розмова з клієнтом після успішного результату"
// 	/>
//   </picture>
// </ImgWraper>
// <Text>
//   Ми прагнемо досягти позитивних результатів для наших клієнтів
//   якнайшвидше і найефективніше. Наша компанія славиться своєю
//   здатністю до досягнення високих стандартів і вирішення навіть
//   найскладніших справ.
// </Text>
// <Column
//   width="520px"
//   left="120px"
//   title="Ефективність і результати"
//   text="Ми прагнемо досягти позитивних результатів для наших клієнтів якнайшвидше і найефективніше. Наша компанія славиться своєю здатністю до досягнення високих стандартів."
// />
// </CardWraper>
