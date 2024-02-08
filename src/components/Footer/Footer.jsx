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
import { ModalFromRoot } from '../ModalFromRoot';
import { PdfViewer } from '../PdfViewer';
import { SocialList } from '../SocialList';
import privacyPolicy from '../../assets/documents/privacy-policy.pdf';
import termsUseSite from '../../assets/documents/terms-of-use-site.pdf';
import { useTranslation } from 'react-i18next';
import { useWindowDimensions } from '../../hooks';
import { useActiveLink } from "../../hooks/useActiveLink.js";
import { useNavData } from "../../hooks/useNavData.js";
import { useGetContacts } from "../../hooks/useGetContacts.js";

const currentYear = new Date().getFullYear();

const Footer = () => {
  const [t] = useTranslation('global');
	const active = useActiveLink()
	const navData= useNavData()
	const {cities, contacts} = useGetContacts();
  const [modalActive, setModalActive] = useState(false);
  const [selectedPdfFile, setSelectedPdfFile] = useState(null);
  const { width } = useWindowDimensions();
  const phone = contacts[0]?.contacts[0]?.phone;
  const formattedPhone = phone ? phone.replace(/[^\d]/g, '') : '';
  const kyivCity = cities.find(city => city.city_name === 'Київ');
  const googleMapsUrl = `https://www.google.com/maps?q=${kyivCity?.coords.lat},${kyivCity?.coords.lng}`;

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

export default Footer
