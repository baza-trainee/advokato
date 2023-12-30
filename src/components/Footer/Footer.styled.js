import { Link, NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import { device, fontLayoutMenu } from '../../styles/mixins';

export const FooterStyled = styled.footer`
  background-color: var(--darkBackground);
  border-radius: 24px 24px 0 0;
  margin-top: -140px;
`;

export const Container = styled.div`
  @media screen and (${device.desktop}) {
    padding-top: ${({ path }) => (path === '/contacts' ? '48px' : '72px')};
    padding-bottom: 28px;
    max-width: 1120px;
    margin: 0 auto;
  }
`;

export const ContentWrp = styled.div`
  display: flex;
  flex-direction: ${props => props.flexDirection || 'row'};
  justify-content: ${({ path }) =>
    path === '/contacts' ? 'space-between' : 'center'};
  gap: ${props => props.gap || '140px'};
  padding: ${({ path }) => (path !== '/contacts' ? '0 60px 20px 100px' : '0')};
  margin-bottom: 28px;
  border-bottom: 1px solid #e0dfe0;
`;

export const ListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const LinkStyled = styled(NavLink)`
  font-family: var(--Montserrat);
  font-size: 18px;
  line-height: calc(32.4 / 18);
  color: ${({ current, active }) =>
    current === active ? 'var(--accentLink)' : 'var(--lightText)'};
  position: relative;
  transition: color 0.3s ease-in-out;

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

export const Text = styled.p`
  margin-bottom: ${props => props.marginbottom || '16px'};
  font-family: var(--Montserrat);
  line-height: calc(32.4 / 18);
  color: var(--lightText);

  margin-left: ${({ path }) => (path === '/contacts' ? '100px' : null)};
`;

export const DocsWrp = styled.div`
  margin-right: ${({ path }) => (path === '/contacts' ? '100px' : null)};
  margin-bottom: ${({ path }) => (path === '/contacts' ? '48px' : null)};
`;

export const DocumentTitleStyled = styled.button`
  display: flex;
  height: 32px;
  min-width: 292px;

  ${fontLayoutMenu};
  text-decoration: underline;
  color: var(--lightText);

  &:first-of-type {
    margin-bottom: 24px;
  }

  &:hover,
  &:focus {
    transition: color var(--timing-function) var(--animation-duration);
    color: var(--accentLink);
  }
`;

export const AddressWrp = styled.address`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 352px;

  font-style: normal;
`;

export const TextLink = styled(Link)`
  ${fontLayoutMenu};
  color: var(--lightText);

  &:hover,
  &:focus {
    transition: color var(--timing-function) var(--animation-duration);
    color: var(--accentLink);
  }
`;

export const EmailStyled = styled.p`
  ${fontLayoutMenu};
  color: var(--lightText);
`;
