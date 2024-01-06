import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { Loading as NotiflixLoading } from 'notiflix/build/notiflix-loading-aio';
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';

import { getContent } from '../../api';
import { isObjectEmpty } from '../../helpers';
import { TeamCard } from '../../components/TeamCard';
import {
  Page,
  Container,
  PageTitle,
  SectionTitle,
  CompanyWrap,
  CompanyDescription,
  CompanyImage,
  TeamList,
} from './CompanyPage.styled';

const CompanyPage = () => {
  const [t, i18n] = useTranslation('global');
  const [aboutCompany, setAboutCompany] = useState({});
  const [team, setTeam] = useState([]);
  const { state } = useLocation();
  const refCard = useRef();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });

    const getData = async () => {
      NotiflixLoading.dots({ svgColor: '#fefefe' });
      const data = await getContent('/our-team?is_slider=false');

      if (!isObjectEmpty(data)) {
        setAboutCompany(prev => data.company);
        setTeam(prev => data.team);
      }

      NotiflixLoading.remove();
    };

    getData();
  }, []);

  useEffect(() => {
    [...refCard.current.children].map(el => {
      if (state === +el.id) {
        setTimeout(
          () =>
            el.scrollIntoView({
              behavior: 'smooth',
              block: 'center',
            }),
          1000
        );
      }
    });
  }, [state, team]);

  const sanitizedCompanyMarkup = DOMPurify.sanitize(
    aboutCompany.our_team_page_description
  );

  return (
    <Page>
      <Container>
        <PageTitle>{t('companyPage.title')}</PageTitle>

        <section>
          <SectionTitle>{t('companyPage.subTitle')}</SectionTitle>

          {!isObjectEmpty(aboutCompany) && (
            <CompanyWrap>
              <CompanyDescription>
                {parse(sanitizedCompanyMarkup)}
              </CompanyDescription>

              <CompanyImage
                src={aboutCompany.our_team_page_photo_path}
                alt="Фото до опису про компанію"
              />
            </CompanyWrap>
          )}
        </section>

        {team && (
          <section>
            <TeamList ref={refCard}>
              {team.map((teamMember, index) => (
                <li id={teamMember.id} key={teamMember.id}>
                  <TeamCard teamMember={teamMember} index={index} />
                </li>
              ))}
            </TeamList>
          </section>
        )}
      </Container>
    </Page>
  );
};

export default CompanyPage;
