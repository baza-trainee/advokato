import { Link, NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import { device, fontLayoutMenu } from '../../styles/mixins';

export const FooterStyled = styled.footer`
  position: relative;
  z-index: 100;
  margin-top: -110px;

  border-radius: 24px 24px 0 0;
  border-top: 1px solid var(--reviewText);
  background-color: var(--darkBackground);
`;

export const Container = styled.div`
  margin: 0 auto;

  @media screen and (${device.mobileL}) {
    padding-top: 24px;
    padding-bottom: 12px;
    height: ${({ path }) => (path === '/contacts' ? '100px' : '300px')};
    max-width: 648px;
  }

  @media screen and (${device.tablet}) {
    padding-top: 20px;
    padding-bottom: 12px;
    height: ${({ path }) => (path === '/contacts' ? '156px' : '328px')};
    max-width: 864px;
  }

  @media screen and (${device.desktop}) {
    padding-top: ${({ path }) => (path === '/contacts' ? '48px' : '72px')};
    padding-bottom: 28px;
    height: ${({ path }) => (path === '/contacts' ? '272px' : '476px')};
    max-width: 1120px;
  }
`;

export const ContentWrp = styled.div`
  display: flex;
  flex-direction: ${props => props.flexDirection || 'row'};
  justify-content: space-between;

  border-bottom: 1px solid #e0dfe0;

  @media screen and (${device.mobileL}) {
    margin-bottom: 12px;
    padding: ${({ path }) => (path !== '/contacts' ? '0 0 12px 0' : '0')};
    gap: 56px;
  }

  @media screen and (${device.tablet}) {
    margin-bottom: 12px;
    padding: ${({ path }) => (path !== '/contacts' ? '0 14px 20px 72px' : '0')};
    gap: 72px;
  }

  @media screen and (${device.desktop}) {
    margin-bottom: 28px;
    padding: ${({ path }) =>
      path !== '/contacts' ? '0 60px 20px 100px' : '0'};
    gap: 140px;
  }
`;

export const ListStyled = styled.ul`
  display: flex;
  flex-direction: column;

  @media screen and (${device.mobileL}) {
    gap: 8px;
  }

  @media screen and (${device.tablet}) {
    gap: 20px;
  }

  @media screen and (${device.desktop}) {
    gap: 24px;
    min-width: 92px;
  }
`;

export const ListItemStyled = styled.li`
  order: ${({ position }) => position};
  
  @media screen and (${device.mobileL}) {
    height: 28px;
  }

  @media screen and (${device.tablet}) {
    height: 20px;
  }

  @media screen and (${device.desktop}) {
    height: 32px;
  }
`;

export const LinkStyled = styled(NavLink)`
  position: relative;

  ${fontLayoutMenu};
  color: ${({ current, active }) =>
    current === active ? 'var(--accentLink)' : 'var(--lightText)'};
  transition: color 0.3s ease-in-out;

  @media screen and (${device.mobileL}) {
    font-size: 14px;
    line-height: calc(26 / 14);
  }

  @media screen and (${device.tablet}) {
    font-size: 16px;
    line-height: calc(29 / 16);
  }

  @media screen and (${device.desktop}) {
    font-size: 18px;
    line-height: calc(32.4 / 18);
  }

  &:hover,
  &:focus {
    color: var(--accentLink);
  }

  &::before {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--accentLink);
    transition: width 0.3s ease-in-out;
  }

  &:hover::before {
    width: 100%;
    width: ${({ current, active }) => (current === active ? '0' : '100%')};
  }
`;

export const TitleCompany = styled.p`
  display: flex;
  align-items: center;

  ${fontLayoutMenu};
  color: var(--lightText);

  @media screen and (${device.mobileL}) {
    margin-left: ${({ path }) => (path === '/contacts' ? '40px' : null)};
    height: 28px;
    font-size: 14px;
    line-height: calc(25 / 14);
  }

  @media screen and (${device.tablet}) {
    margin-left: ${({ path }) => (path === '/contacts' ? '40px' : null)};
    height: 20px;
    font-size: 16px;
    line-height: calc(29 / 16);
  }

  @media screen and (${device.desktop}) {
    margin-left: ${({ path }) => (path === '/contacts' ? '100px' : null)};
    height: 32px;
    font-size: 18px;
    line-height: calc(32.4 / 18);
  }
`;

export const BottomSign = styled.p`
  ${fontLayoutMenu};
  color: var(--lightText);

  @media screen and (${device.mobileL}) {
    height: 20px;
    font-size: 14px;
    line-height: calc(22 / 14);
  }

  @media screen and (${device.tablet}) {
    height: 32px;
    font-size: 16px;
    line-height: calc(29 / 16);
  }

  @media screen and (${device.desktop}) {
    font-size: 18px;
    line-height: calc(32.4 / 18);
  }
`;

export const DocsWrp = styled.div`
  @media screen and (${device.mobileL}) {
  }

  @media screen and (${device.tablet}) {
    margin-right: ${({ path }) => (path === '/contacts' ? '40px' : null)};
    margin-bottom: ${({ path }) => (path === '/contacts' ? '20px' : null)};
  }

  @media screen and (${device.desktop}) {
    margin-right: ${({ path }) => (path === '/contacts' ? '100px' : null)};
    margin-bottom: ${({ path }) => (path === '/contacts' ? '48px' : null)};
  }
`;

export const DocumentTitleStyled = styled.button`
  display: flex;
  align-items: center;

  ${fontLayoutMenu};
  text-decoration: underline;
  color: var(--lightText);

  &:first-of-type {
    @media screen and (${device.mobileL}) {
      margin-bottom: 8px;
    }

    @media screen and (${device.tablet}) {
      margin-bottom: 20px;
    }

    @media screen and (${device.desktop}) {
      margin-bottom: 24px;
    }
  }

  &:hover,
  &:focus {
    transition: color var(--timing-function) var(--animation-duration);
    color: var(--accentLink);
  }

  @media screen and (${device.mobileL}) {
    height: 28px;
    min-width: 228px;

    font-size: 14px;
    line-height: calc(25 / 14);
  }

  @media screen and (${device.tablet}) {
    height: 20px;
    min-width: 260px;

    font-size: 16px;
    line-height: calc(29 / 16);
  }

  @media screen and (${device.desktop}) {
    height: 32px;
    min-width: 292px;

    font-size: 18px;
    line-height: calc(32.4 / 18);
  }
`;

export const AddressWrp = styled.address`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  font-style: normal;

  @media screen and (${device.mobileL}) {
    width: 236px;
    gap: 8px;
  }

  @media screen and (${device.tablet}) {
    width: 262px;
    gap: 16px;
  }

  @media screen and (${device.desktop}) {
    width: 352px;
  }
`;

export const MainOfficeStyled = styled(Link)`
  display: flex;
  align-items: center;

  ${fontLayoutMenu};
  color: var(--lightText);

  &:hover,
  &:focus {
    transition: color var(--timing-function) var(--animation-duration);
    color: var(--accentLink);
  }

  @media screen and (${device.mobileL}) {
    height: 80px;
    font-size: 14px;
    line-height: calc(25 / 14);
  }

  @media screen and (${device.tablet}) {
    height: 84px;
    font-size: 16px;
    line-height: calc(29 / 16);
  }

  @media screen and (${device.desktop}) {
    height: 96px;
    font-size: 18px;
    line-height: calc(32.4 / 18);
  }
`;

export const PhoneStyled = styled(Link)`
  display: flex;
  align-items: center;
  height: 32px;

  ${fontLayoutMenu};
  color: var(--lightText);

  @media screen and (${device.mobileL}) {
    height: 28px;
    font-size: 14px;
    line-height: calc(25 / 14);
  }

  @media screen and (${device.tablet}) {
    height: 20px;
    font-size: 16px;
    line-height: calc(29 / 16);
  }

  @media screen and (${device.desktop}) {
    height: 32px;
    font-size: 18px;
    line-height: calc(32.4 / 18);
  }
`;

export const EmailStyled = styled.p`
  display: flex;
  align-items: center;

  ${fontLayoutMenu};
  color: var(--lightText);

  @media screen and (${device.mobileL}) {
    height: 28px;
    font-size: 14px;
    line-height: calc(25 / 14);
  }

  @media screen and (${device.tablet}) {
    height: 20px;
    font-size: 18px;
    line-height: calc(32.4 / 18);
  }

  @media screen and (${device.desktop}) {
    height: 32px;
  }
`;
