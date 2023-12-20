import PropTypes from 'prop-types';

import { SocialListStyled, SocialLink } from './SocialList.styled';
import { Icon } from '../Icon';

export const SocialList = ({ media, currentfill, hoverfill }) => {
  return (
    <SocialListStyled>
      {media.map(({ url, title }, index) => (
        <li key={index}>
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
        </li>
      ))}
    </SocialListStyled>
  );
};

SocialList.propTypes = {
  media: PropTypes.array.isRequired,
  currentfill: PropTypes.string,
  hoverfill: PropTypes.string,
};
