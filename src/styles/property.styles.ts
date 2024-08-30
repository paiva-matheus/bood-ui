import styled from 'styled-components';

export const Section = styled.section`
  width: 85%;
  max-width: 60rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;
