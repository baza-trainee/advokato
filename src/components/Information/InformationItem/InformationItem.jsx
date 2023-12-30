import PropTypes from 'prop-types';
import {
  LiStyled,
  ImageWrp,
  ImageStyled,
  ShortTextStyled,
  DescriptionStyled,
} from './InformationItem.styled';

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
        />

        <ShortTextStyled id={id}>
          <h3>{title}</h3>
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
