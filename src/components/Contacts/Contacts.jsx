import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Loading as NotiflixLoading } from 'notiflix/build/notiflix-loading-aio';

import { isObjectEmpty } from '../../helpers';
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
  ContactsWrp,
} from './Contacts.styled';

export const Contacts = () => {
  const [t, i18n] = useTranslation('global');
  const [cities, setCities] = useState([]);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const getData = async () => {
      NotiflixLoading.dots();
      const data = await getContent('contacts');

      if (!isObjectEmpty(data)) {
        setCities(() => data.cities);
        setContacts(() => data.contacts);
      }

      NotiflixLoading.remove();
    };

    getData();
  }, []);

  return (
    <SectionStyled>
      <Container>
        <TitleStyled>{t('contactsPage.title')}</TitleStyled>

        <CenterWrp>
          {contacts?.length > 0 && (
            <>
              <LeftSide>
                <AddressList cities={cities} />

                <ContactsWrp>
                  <p>{contacts[0]?.contacts[0]?.phone}</p>

                  <p>{contacts[0]?.contacts[1]?.mail}</p>

                  <SocialList
                    currentfill={'#333333'}
                    media={contacts[0]?.social}
                  />
                </ContactsWrp>
              </LeftSide>

              <GoogleMap cities={cities} />
            </>
          )}
        </CenterWrp>
      </Container>
    </SectionStyled>
  );
};
