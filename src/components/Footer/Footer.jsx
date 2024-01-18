import {
  AddressWrp,
  BottomSign,
  Container,
  ContentWrp,
  DocsWrp,
  DocumentTitleStyled,
  EmailStyled,
  FooterStyled,
  LinkStyled,
  ListItemStyled,
  ListStyled,
  MainOfficeStyled,
  PhoneStyled,
  TitleCompany,
} from './Footer.styled';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { ModalFromRoot } from '../ModalFromRoot';
import { PdfViewer } from '../PdfViewer';
import { SocialList } from '../SocialList';
import { getContent } from '../../api/';
import { isObjectEmpty } from '../../helpers';
import privacyPolicy from '../../assets/documents/privacy-policy.pdf';
import termsUseSite from '../../assets/documents/terms-of-use-site.pdf';
import { useTranslation } from 'react-i18next';
import { useWindowDimensions } from '../../hooks';

const currentYear = new Date().getFullYear();

export const Footer = () => {
  const [t, i18n] = useTranslation('global');
  const [modalActive, setModalActive] = useState(false);
  const [active, setActive] = useState('home');
  const [selectedPdfFile, setSelectedPdfFile] = useState(null);
  const { pathname, hash } = useLocation();
  const { height, width } = useWindowDimensions();
  const navigate = useNavigate();

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
    if (hash !== '#practice' || hash !== '#news') {
      navigate('*');
    }
  }, [pathname, hash]);

  useEffect(() => {
    if (!modalActive) {
      document.body.style.overflowY = 'auto';
    }
  }, [modalActive]);

  const navData = [
    {
      id: 1,
      path: '/',
      label: 'посилання на головну сторінку',
      name: 'home',
      title: t('header.nav.home'),
    },
    {
      id: 2,
      path: '/company',
      label: 'посилання на сторінку компанії',
      name: 'company',
      title: t('header.nav.company'),
    },
    {
      id: 3,
      path: '/#practice',
      label: 'посилання на сторінку практики',
      name: 'practice',
      title: t('header.nav.practice'),
    },
    {
      id: 4,
      path: '/#news',
      label: 'посилання на сторінку новин',
      name: 'news',
      title: t('header.nav.news'),
    },
    {
      id: 5,
      path: '/contacts',
      label: 'посилання на сторінку контактів',
      name: 'contacts',
      title: t('header.nav.contacts'),
    },
  ];

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
            {(location.pathname !== '/contacts' || width < 768) && (
              <nav>
                <ListStyled>
                  {navData.map(({ id, path, label, name, title }) => (
                    <ListItemStyled key={id} position={id}>
                      <LinkStyled
                        to={path}
                        aria-label={label}
                        current={name}
                        active={active}
                      >
                        {title}
                      </LinkStyled>
                    </ListItemStyled>
                  ))}
                </ListStyled>
              </nav>
            )}

            {location.pathname === '/contacts' && width >= 768 && (
              <TitleCompany path={location.pathname}>
                {t('footer.titleCompany')}
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
                <TitleCompany>{t('footer.titleCompany')}</TitleCompany>

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

          <BottomSign>{`${currentYear} ${t('footer.bottomSign')}`}</BottomSign>
        </Container>
      </FooterStyled>
    </>
  );
};
