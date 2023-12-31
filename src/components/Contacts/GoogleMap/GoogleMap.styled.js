import styled from '@emotion/styled';

export const containerStyleDesktop = {
  width: '548px',
  height: '600px',
};

export const containerStyleTablet = {
  width: '420px',
  height: '348px',
};

export const containerStyleMobileL = {
  width: '648px',
  height: '408px',
};

export const MarkerWrp = styled.div`
  padding: 10px;
  width: clamp(200px, 40%, 300px);

  color: var(--lightText);
  background-color: var(--darkBackground);
`;
