import styled from 'styled-components';

export const PropertyViewContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2.5rem auto;
  max-width: 28.438rem;
  background: #fefefe;
  box-shadow: 4px 4px 8px 4px #e2e2e2;

  img {
    width: 100%;
    object-fit: cover;
  }

  @media (min-width: 1024px) {
    width: 24rem;
  }
`;

export const PropertyViewTextContainer = styled.div`
  padding: 0 1rem 1rem;
`;

export const PropertyViewTitle = styled.h1`
  margin: 1rem 0;
  font-size: 2rem;
  color: var(--dark-blue);
`;

export const PropertyViewDescription = styled.p`
  color: var(--text-color);
  font-size: 1rem;
  margin-bottom: 1rem;
`;

export const PropertyViewPrice = styled.div`
  background: var(--dark-blue);
  padding: 1rem 0;
  text-align: center;
  font-size: 1.25rem;
  color: var(--text-color-secondary);
`;
