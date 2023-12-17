import PropTypes from 'prop-types';

import { SocialListStyled, SocialLink } from './SocialList.styled';
import { media } from './SocialData';
import { Icon } from '../Icon';

export const SocialList = ({ currentFill, hoverFill }) => {
  return (
    <SocialListStyled>
      {media.map(({ url, iconId }, index) => (
        <li key={index}>
          <SocialLink
            to={url}
            target="_blank"
            aria-label={iconId}
            rel="noopener nofollow noreferrer"
            currentFill={currentFill}
            hoverFill={hoverFill}
          >
            <Icon id={iconId} width={30} height={30} />
          </SocialLink>
        </li>
      ))}
    </SocialListStyled>
  );
};

SocialList.propTypes = {
  currentFill: PropTypes.string,
  hoverFill: PropTypes.string,
};
