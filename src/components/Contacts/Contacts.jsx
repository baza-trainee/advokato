import { useEffect, useState } from 'react';
import { GoogleMap } from './GoogleMap';

import { getContent } from '../../api/';
import { SocialList } from '../SocialList';
import { AddressList } from './AddressList';
import { LoadingAnimated } from '../LoadingAnimated';
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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const getData = async () => {
      setIsLoading(prev => true);
      const data = await getContent('contacts');

      setCities(prev => data.cities);
      setContacts(prev => data.contacts);

      setIsLoading(prev => false);
    };

    getData();
  }, []);

  return (
    <SectionStyled>
      <Container>
        <TitleStyled>ADVOCATE COMPANY «STATUS»</TitleStyled>

        <CenterWrp>
          {isLoading && <LoadingAnimated />}

          {contacts.length > 0 && !isLoading && (
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
