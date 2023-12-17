import { GoogleMap } from './GoogleMap';

import { data } from './contactsData';
import { SocialList } from '../SocialList';
import {
  SectionStyled,
  Container,
  TitleStyled,
  CenterWrp,
  LeftSide,
} from './Contacts.styled';

export const Contacts = () => {
  return (
    <SectionStyled>
      <Container>
        <TitleStyled>ADVOCATE COMPANY «STATUS»</TitleStyled>

        <CenterWrp>
          <LeftSide>
            <ul>
              <li>
                <p>
                  Вул. Велика Васильківська 21, офіс 307, Печерський район, м.
                  Київ, Україна
                </p>
              </li>

              <li>
                <p>Вул. Нікольська 19, м. Миколаїв, Україна </p>
              </li>

              <li>
                <p>Площа 10 квітня 1, м. Одеса, Україна </p>
              </li>
            </ul>

            <p>+38 (093) 373 73 03</p>

            <p>acstatus.mk@gmail.com</p>

            <SocialList currentFill={'#333333'} />
          </LeftSide>

          <GoogleMap data={data} />
        </CenterWrp>
      </Container>
    </SectionStyled>
  );
};
