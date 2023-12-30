import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import { PdfViewer } from '../PdfViewer';
import { Modal } from '../Modal';
import { SocialList } from '../SocialList';
import {
  Container,
  ContentWrp,
  AddressWrp,
  FooterStyled,
  DocsWrp,
  DocumentTitleStyled,
  LinkStyled,
  ListStyled,
  Text,
  TextLink,
  EmailStyled,
} from './Footer.styled';
import privacyPolicy from '../../assets/documents/privacy-policy.pdf';
import termsUseSite from '../../assets/documents/terms-of-use-site.pdf';
import { getContent } from '../../api/';
import { isObjectEmpty } from '../../helpers';

const currentYear = new Date().getFullYear();

export const Footer = () => {
  const [t, i18n] = useTranslation('global');
  const [modalActive, setModalActive] = useState(false);
  const [active, setActive] = useState('home');
  const [selectedPdfFile, setSelectedPdfFile] = useState(null);
  const { pathname, hash } = useLocation();

  const [contacts, setContacts] = useState([]);
  const phone = contacts[0]?.contacts[0]?.phone;
  const formattedPhone = phone ? phone.replace(/[^\d]/g, '') : '';

  const [cities, setCities] = useState([]);
  const kyivCity = cities.find(city => city.city_name === 'Київ');
  const googleMapsUrl = `https://www.google.com/maps?q=${kyivCity?.coords.lat},${kyivCity?.coords.lng}`;

  useEffect(() => {
    const getData = async () => {
      const data = await getContent('contacts');

      if (!isObjectEmpty(data)) {
        setCities(prev => data.cities);
        setContacts(prev => data.contacts);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    if (pathname === '/' && hash === '') {
      return setActive(prev => 'home');
    }
    if (pathname === '/company') {
      return setActive(prev => 'company');
    }
    if (hash === '#practice') {
      return setActive(prev => 'practice');
    }
    if (hash === '#news') {
      return setActive(prev => 'news');
    }
    if (pathname === '/contacts') {
      return setActive(prev => 'contacts');
    }
  }, [pathname, hash]);

  return (
    <FooterStyled>
      <Container path={location.pathname}>
        <Modal active={modalActive} setActive={setModalActive}>
          <PdfViewer pdfFile={selectedPdfFile} />
        </Modal>

        <ContentWrp path={location.pathname}>
          {location.pathname !== '/contacts' && (
            <nav>
              <ListStyled>
                <li>
                  <LinkStyled
                    to="/"
                    aria-label="посилання на головну сторінку"
                    current="home"
                    active={active}
                  >
                    {t('header.nav.home')}
                  </LinkStyled>
                </li>
                <li>
                  <LinkStyled
                    to="/company"
                    aria-label="посилання на сторінку компанії"
                    current="company"
                    active={active}
                  >
                    {t('header.nav.company')}
                  </LinkStyled>
                </li>
                <li>
                  <LinkStyled
                    to="/#practice"
                    aria-label="посилання на сторінку практики"
                    current="practice"
                    active={active}
                  >
                    {t('header.nav.practice')}
                  </LinkStyled>
                </li>
                <li>
                  <LinkStyled
                    to="/#news"
                    aria-label="посилання на сторінку новин"
                    current="news"
                    active={active}
                  >
                    {t('header.nav.news')}
                  </LinkStyled>
                </li>
                <li>
                  <LinkStyled
                    to="/contacts"
                    aria-label="посилання на сторінку контактів"
                    current="contacts"
                    active={active}
                  >
                    {t('header.nav.contacts')}
                  </LinkStyled>
                </li>
              </ListStyled>
            </nav>
          )}

          {location.pathname === '/contacts' && (
            <Text path={location.pathname}>ADVOCATE COMPANY «STATUS»</Text>
          )}

          <DocsWrp path={location.pathname}>
            <DocumentTitleStyled
              type="button"
              onClick={() => {
                setModalActive(true);
                setSelectedPdfFile(privacyPolicy);
              }}
              aria-label="посилання на політику конфіденційності"
            >
              {t('footer.privacyDocTitle')}
            </DocumentTitleStyled>

            <DocumentTitleStyled
              type="button"
              onClick={() => {
                setModalActive(true);
                setSelectedPdfFile(termsUseSite);
              }}
              aria-label="посилання на умови користування сайтом"
            >
              {t('footer.termsUseSiteDocTitle')}
            </DocumentTitleStyled>
          </DocsWrp>

          {location.pathname !== '/contacts' && (
            <AddressWrp>
              <Text>ADVOCATE COMPANY «STATUS»</Text>

              {cities?.length > 0 && (
                <TextLink
                  to={googleMapsUrl}
                  target="_blank"
                  rel="noopener nofollow noreferrer"
                  aria-label="адреса компанії"
                >
                  {`${kyivCity?.address}`}
                </TextLink>
              )}

              {contacts?.length > 0 && (
                <>
                  <TextLink
                    to={`tel:+${formattedPhone}`}
                    aria-label="телефон компанії"
                  >
                    {phone}
                  </TextLink>

                  <EmailStyled>{contacts[0]?.contacts[1]?.mail}</EmailStyled>

                  <SocialList media={contacts[0]?.social} />
                </>
              )}
            </AddressWrp>
          )}
        </ContentWrp>

        <Text>{`${currentYear} ADVOCATE COMPANY «STATUS». All rights reserved.`}</Text>
      </Container>
    </FooterStyled>
  );
};
