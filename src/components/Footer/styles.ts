import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 2rem 1rem 2rem;
  margin-top: 0.5rem;
  border-top: 1px solid var(--dark-blue);

  p {
    font-size: 1rem;
    text-align: center;
    color: var(--text-color);

    span {
      font-weight: 700;
    }
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 5rem;
  }
`;
