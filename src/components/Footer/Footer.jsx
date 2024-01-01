import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import { ModalFromRoot } from '../ModalFromRoot';
import { PdfViewer } from '../PdfViewer';
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
  TitleCompany,
  BottomSign,
  MainOfficeStyled,
  PhoneStyled,
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

  useEffect(() => {
    if (!modalActive) {
      document.body.style.overflowY = 'auto';
    }
  }, [modalActive]);

  const toggleModal = () => {
    document.body.style.overflowY = 'hidden';
    setModalActive(prev => !prev);
  };

  return (
    <>
      {modalActive && (
        <ModalFromRoot toggleModal={toggleModal} align={'flex-start'}>
          <PdfViewer pdfFile={selectedPdfFile} />
        </ModalFromRoot>
      )}

      <FooterStyled>
        <Container path={location.pathname}>
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
              <TitleCompany path={location.pathname}>
                ADVOCATE COMPANY «STATUS»
              </TitleCompany>
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
                <TitleCompany>ADVOCATE COMPANY «STATUS»</TitleCompany>

                {cities?.length > 0 && (
                  <MainOfficeStyled
                    to={googleMapsUrl}
                    target="_blank"
                    rel="noopener nofollow noreferrer"
                    aria-label="адреса компанії"
                  >
                    {`${kyivCity?.address}`}
                  </MainOfficeStyled>
                )}

                {contacts?.length > 0 && (
                  <>
                    <PhoneStyled
                      to={`tel:+${formattedPhone}`}
                      aria-label="телефон компанії"
                    >
                      {phone}
                    </PhoneStyled>

                    <EmailStyled>{contacts[0]?.contacts[1]?.mail}</EmailStyled>

                    <SocialList media={contacts[0]?.social} />
                  </>
                )}
              </AddressWrp>
            )}
          </ContentWrp>

          <BottomSign>{`${currentYear} ADVOCATE COMPANY «STATUS». All rights reserved.`}</BottomSign>
        </Container>
      </FooterStyled>
    </>
  );
};
