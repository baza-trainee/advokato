import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import { ButtonConsultation } from '../ButtonConsultation';
import {
	SectionStyled,
	Container,
	CompanyBox,
	ImageBoxStyled,
	ImageStyled,
	TextStyled, ImageBoxMobStyled,
} from "./Owner.styled";

export const Owner = ({ data }) => {
  const [t, i18n] = useTranslation('global');
  const [modalActive, setModalActive] = useState(false);

  return (
    <SectionStyled>
      <Container>
        <CompanyBox>
          <TextStyled>
            <h2>
              {t('owner.title')}
              <span> {t('owner.subTitle')}</span>
            </h2>

						<ImageBoxMobStyled>
							{data?.main_page_photo_path && (
								<ImageStyled
									src={data?.main_page_photo_path}
									width={272}
									height={340}
									alt="фотографія засновника компанії"
								/>
							)}
						</ImageBoxMobStyled>

            <p>{data?.main_page_description}</p>

            <ButtonConsultation
              className="btn-owner"
              modalActive={modalActive}
              setModalActive={setModalActive}
            />
          </TextStyled>
        </CompanyBox>

        <ImageBoxStyled>
          {data?.main_page_photo_path && (
            <ImageStyled
              src={data?.main_page_photo_path}
              width={610}
              height={900}
              alt="фотографія засновника компанії"
            />
          )}
        </ImageBoxStyled>
      </Container>
    </SectionStyled>
  );
};

Owner.propTypes = {
  data: PropTypes.object.isRequired,
};
