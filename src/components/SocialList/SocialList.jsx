import PropTypes from 'prop-types';

import { SocialListStyled, SocialLink } from './SocialList.styled';
import { media } from './SocialData';
import { Icon } from '../Icon';

export const SocialList = ({ contacts, currentfill2, hoverfill2 }) => {
  console.log(contacts);
  return (
    <SocialListStyled>
      {contacts.map(({ url, iconId }, index) => (
        <li key={index}>
          <SocialLink
            to={url}
            target="_blank"
            aria-label={iconId}
            rel="noopener nofollow noreferrer"
            currentfill2={currentfill2}
            hoverfill2={hoverfill2}
          >
            <Icon id={iconId} width={30} height={30} />
          </SocialLink>
        </li>
      ))}
    </SocialListStyled>
  );
};

SocialList.propTypes = {
  contacts: PropTypes.array.isRequired,
  currentfill2: PropTypes.string,
  hoverfill2: PropTypes.string,
};
