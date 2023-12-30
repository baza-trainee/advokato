import { Link, NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import { device, fontLayoutMenu } from '../../styles/mixins';

export const FooterStyled = styled.footer`
  position: relative;
  z-index: 100;
  background-color: var(--darkBackground);
  border-radius: 24px 24px 0 0;
  margin-top: -110px;

  border-top: 1px solid var(--reviewText);
`;

export const Container = styled.div`
  margin: 0 auto;

  @media screen and (min-width: 768px) {
  }

  @media screen and (${device.tablet}) {
    padding-top: 20px;
    padding-bottom: 12px;
    max-width: 864px;
  }

  @media screen and (${device.desktop}) {
    padding-top: ${({ path }) => (path === '/contacts' ? '48px' : '72px')};
    padding-bottom: 28px;
    max-width: 1120px;
  }
`;

export const ContentWrp = styled.div`
  display: flex;
  flex-direction: ${props => props.flexDirection || 'row'};
  justify-content: space-between;
  margin-bottom: 28px;
  border-bottom: 1px solid #e0dfe0;

  @media screen and (min-width: 768px) {
  }

  @media screen and (${device.tablet}) {
    padding: ${({ path }) => (path !== '/contacts' ? '0 14px 20px 72px' : '0')};
    gap: 72px;
  }

  @media screen and (${device.desktop}) {
    padding: ${({ path }) =>
      path !== '/contacts' ? '0 60px 20px 100px' : '0'};
    gap: 140px;
  }
`;

export const ListStyled = styled.ul`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
  }

  @media screen and (${device.tablet}) {
    gap: 20px;
  }

  @media screen and (${device.desktop}) {
    gap: 24px;
  }
`;

export const LinkStyled = styled(NavLink)`
  position: relative;

  ${fontLayoutMenu};
  color: ${({ current, active }) =>
    current === active ? 'var(--accentLink)' : 'var(--lightText)'};
  transition: color 0.3s ease-in-out;

  @media screen and (min-width: 768px) {
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

export const Text = styled.p`
  ${fontLayoutMenu};
  color: var(--lightText);

  @media screen and (min-width: 768px) {
  }

  @media screen and (${device.tablet}) {
    margin-left: ${({ path }) => (path === '/contacts' ? '40px' : null)};
    font-size: 16px;
    line-height: calc(29 / 16);
  }

  @media screen and (${device.desktop}) {
    margin-left: ${({ path }) => (path === '/contacts' ? '100px' : null)};
    font-size: 18px;
    line-height: calc(32.4 / 18);
  }
`;

export const DocsWrp = styled.div`
  @media screen and (min-width: 768px) {
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

  ${fontLayoutMenu};
  text-decoration: underline;
  color: var(--lightText);

  &:first-of-type {
    @media screen and (min-width: 768px) {
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

  @media screen and (min-width: 768px) {
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
  gap: 16px;

  font-style: normal;

  @media screen and (min-width: 768px) {
  }

  @media screen and (${device.tablet}) {
    width: 262px;
  }

  @media screen and (${device.desktop}) {
    width: 352px;
  }
`;

export const TextLink = styled(Link)`
  ${fontLayoutMenu};
  color: var(--lightText);

  &:hover,
  &:focus {
    transition: color var(--timing-function) var(--animation-duration);
    color: var(--accentLink);
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (${device.tablet}) {
    font-size: 16px;
    line-height: calc(29 / 16);
  }

  @media screen and (${device.desktop}) {
    font-size: 18px;
    line-height: calc(32.4 / 18);
  }
`;

export const EmailStyled = styled.p`
  ${fontLayoutMenu};
  color: var(--lightText);

  @media screen and (min-width: 768px) {
  }

  @media screen and (${device.tablet}) {
    font-size: 18px;
    line-height: calc(32.4 / 18);
  }
`;
