import styled from '@emotion/styled';
import {
  fontSectionTitle,
  device,
  flexBox,
  fontDesktop,
} from '../../styles/mixins';

export const SectionStyled = styled.section`
  background-color: var(--lightBackground);
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 132px 160px;
  max-width: 1440px;
`;

export const TitleStyled = styled.h2`
  width: 944px;
  margin-bottom: 40px;

  ${fontSectionTitle};
`;

// export const CardWraper = styled.div`
//   position: relative;

//   @media screen and (${device.desktop}) {
//     ${flexBox};
//     gap: 120px;
//     margin-bottom: 176px;
//   }
// `;

// export const ImgWraper = styled.div`
//   @media screen and (${device.desktop}) {
//     min-width: 548px;
//     border-radius: 24px;
//     overflow: hidden;
//   }
// `;

// export const Text = styled.p`
//   @media screen and (${device.desktop}) {
//     ${fontDesktop};
//   }
// `;
