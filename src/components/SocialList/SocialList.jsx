import PropTypes from 'prop-types';

import { SocialListStyled, SocialLink } from './SocialList.styled';
import { media } from './SocialData';
import { Icon } from '../Icon';

export const SocialList = ({ contacts, currentfill, hoverfill }) => {
  console.log(contacts);

  return (
    <SocialListStyled>
      {media.map(({ url, iconId }, index) => (
        <li key={index}>
          <SocialLink
            to={url}
            target="_blank"
            aria-label={iconId}
            rel="noopener nofollow noreferrer"
            currentfill={currentfill}
            hoverfill={hoverfill}
          >
            <Icon id={iconId} width={30} height={30} />
          </SocialLink>
        </li>
      ))}
    </SocialListStyled>
  );
};

SocialList.propTypes = {
  // contacts: PropTypes.array.isRequired,
  currentfill: PropTypes.string,
  hoverfill: PropTypes.string,
};
