import PropTypes from 'prop-types';

import { SocialListStyled, SocialLink, ItemStyled } from './SocialList.styled';
import { Icon } from '../Icon';

export const SocialList = ({ media, currentfill, hoverfill }) => {
  return (
    <SocialListStyled>
      {media.map(({ url, title, id }, index) => (
        <ItemStyled key={index} position={id}>
          <SocialLink
            to={url}
            target="_blank"
            aria-label={title}
            rel="noopener nofollow noreferrer"
            currentfill={currentfill}
            hoverfill={hoverfill}
          >
            <Icon id={title} width={30} height={30} />
          </SocialLink>
        </ItemStyled>
      ))}
    </SocialListStyled>
  );
};

SocialList.propTypes = {
  media: PropTypes.array.isRequired,
  currentfill: PropTypes.string,
  hoverfill: PropTypes.string,
};
