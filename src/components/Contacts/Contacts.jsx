import { useEffect, useState } from 'react';
import { GoogleMap } from './GoogleMap';

import { getContent } from '../../api/';
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
          {contacts.length > 0 && (
            <>
              <LeftSide>
                <AddressList cities={cities} />

                <p>{contacts[0]?.contacts[0]?.phone}</p>

                <p>{contacts[0]?.contacts[1]?.mail}</p>

                <SocialList
                  currentfill={'#333333'}
                  media={contacts[0]?.social}
                />
              </LeftSide>

              <GoogleMap cities={cities} />
            </>
          )}
        </CenterWrp>
      </Container>
    </SectionStyled>
  );
};
