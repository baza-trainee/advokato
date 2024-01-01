import { useState, useEffect } from 'react';

import { ModalFromRoot } from '../ModalFromRoot';
import { PdfViewer } from '../PdfViewer';
import privacyPolicy from '../../assets/documents/privacy-policy.pdf';
import {
  Panel,
  IconClose,
  ButtonOk,
  BannerWrap,
  PolicyLink,
} from './CookiesPanel.styled';

const CookiesPanel = () => {
  const [showPanel, setShowPanel] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [cookieConsent, setCookieConsent] = useState();

  useEffect(() => {
    if (!modalActive) {
      document.body.style.overflowY = 'auto';
    }
  }, [modalActive]);

  const toggleModal = () => {
    document.body.style.overflowY = 'hidden';
    setModalActive(prev => !prev);
  };

  const handleAccept = () => {
    document.cookie = 'cookiesAccepted=true; max-age=31536000;';
    setCookieConsent(true);
    setShowPanel(false);
  };

  const handleClose = () => {
    setShowPanel(false);
    setCookieConsent(false);
    sessionStorage.setItem('cookiesAccepted', 'false');
  };

  useEffect(() => {
    const consentCookie = document.cookie
      .split('; ')
      .find(row => row.startsWith('cookiesAccepted='));

    const cookieSessionDeny = sessionStorage.getItem('cookiesAccepted');

    if (consentCookie) {
      setCookieConsent(true);
    } else if (cookieSessionDeny === null) {
      setTimeout(() => setShowPanel(true), 4000);
    }
  }, []);

  return (
    <>
      {modalActive && (
        <ModalFromRoot toggleModal={toggleModal} align={'flex-start'}>
          <PdfViewer pdfFile={privacyPolicy} />
        </ModalFromRoot>
      )}

      {showPanel && (
        <Panel>
          <IconClose
            id={'close'}
            width={24}
            height={24}
            onClick={() => handleClose()}
            role="close-button"
            aria-label="Закрити панель"
          />
          <BannerWrap>
            <p>
              Цей сайт використовує файли cookies для правильної роботи і
              покращення сервісу. Якщо ви погоджуєтесь з їхнім використанням,
              натисніть ОК. Більше інформації в
              <PolicyLink
                href="#"
                onClick={() => {
                  setModalActive(true);
                }}
                aria-label="Відкрити політику конфіденційності"
              >
                Політика конфіденційності
              </PolicyLink>
            </p>
            <ButtonOk
              type="button"
              onClick={() => handleAccept()}
              aria-label="Прийняти обробку кукіс"
            >
              Ok
            </ButtonOk>
          </BannerWrap>
        </Panel>
      )}
    </>
  );
};

export { CookiesPanel };
