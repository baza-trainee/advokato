import styled from '@emotion/styled';
import {
  container,
  fontSectionTitle,
  device,
  flexBox,
  flexColumn,
} from '../../styles/mixins';

export const Page = styled.div`
  background-color: var(--darkBackground);
  color: var(--lightText);
`;

export const Container = styled.div`
  ${container};

  @media screen and (${device.tablet}) {
    padding-top: calc(120px + 76px);
    padding-bottom: calc(120px + 24px);
  }

  @media screen and (${device.desktop}) {
    padding-top: calc(156px + 88px);
    padding-bottom: calc(132px + 24px);
  }
`;

export const PageTitle = styled.h1`
  ${fontSectionTitle};
  color: var(--lightText);
  margin-bottom: 40px;
`;

export const SectionTitle = styled.h2`
  margin-bottom: 40px;

  font-family: var(--Raleway);
  font-weight: 400;
  font-size: 32px;
  line-height: calc(44.8 / 32);
`;

export const CompanyWrap = styled.div`
  @media screen and (${device.desktop}) {
    ${flexBox}
    gap: 72px;
    margin-bottom: 132px;
  }
`;

export const CompanyDescription = styled.div`
  flex-grow: 1;

  font-family: var(--Raleway);
  font-weight: 400;
  font-size: 18px;
  line-height: calc(27 / 18);

  p {
    margin-bottom: 12px;
  }

  ul {
    list-style: inside;
    list-style-position: outside;
    padding-left: 1em;
  }
`;

export const CompanyImage = styled.img`
  width: 524px;
  height: 772px;
  object-fit: cover;
`;

export const TeamList = styled.ul`
  @media screen and (${device.desktop}) {
    ${flexBox};
    ${flexColumn};
    gap: 72px;
  }
`;
