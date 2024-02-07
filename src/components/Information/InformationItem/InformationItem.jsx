import {
  DescriptionStyled,
  ImageStyled,
  ImageWrp,
  LiStyled,
  ShortTextStyled,
} from './InformationItem.styled';

import PropTypes from 'prop-types';

export const InformationItem = ({ item }) => {
  const { id, title, short_text, description, photo_path } = item;

  return (
    <LiStyled id={id}>
      <ImageWrp>
        <ImageStyled
          src={photo_path}
          width={548}
          height={388}
          alt="тематичне зображення"
          id={id}
        />

        <ShortTextStyled id={id}>
          <h2>{title}</h2>
          <p>{short_text}</p>
        </ShortTextStyled>
      </ImageWrp>

      <DescriptionStyled>{description}</DescriptionStyled>
    </LiStyled>
  );
};

InformationItem.propTypes = {
  item: PropTypes.object.isRequired,
};
