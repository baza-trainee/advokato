import { useEffect, useState } from 'react';
import { GoogleMap } from './GoogleMap';

import { getContent } from '../../api/';
import { data } from './contactsData';
import { SocialList } from '../SocialList';
import { AddressList } from './AddressList';
import {
  SectionStyled,
  Container,
  TitleStyled,
  CenterWrp,
  LeftSide,
} from './Contacts.styled';

export const Contacts = () => {
  const [cities, setCities] = useState([]);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getContent('contacts');

      setCities(prev => data.cities);
      setContacts(prev => data.contacts);
    };

    getData();
  }, []);

  return (
    <SectionStyled>
      <Container>
        <TitleStyled>ADVOCATE COMPANY «STATUS»</TitleStyled>

        <CenterWrp>
          <LeftSide>
            <AddressList cities={cities} />

            <p>{contacts[4]?.phone}</p>

            <p>{contacts[5]?.mail}</p>

            <SocialList currentfill2={'#333333'} contacts={contacts} />
          </LeftSide>

          <GoogleMap data={data} />
        </CenterWrp>
      </Container>
    </SectionStyled>
  );
};
