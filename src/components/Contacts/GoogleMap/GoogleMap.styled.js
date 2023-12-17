import styled from '@emotion/styled';

export const containerStyle = {
  width: '500px',
  height: '600px',
};

export const MarkerWrp = styled.div`
  padding: 10px;
  width: clamp(200px, 40%, 300px);

  color: var(--lightText);
  background-color: var(--darkBackground);
`;
