import styled from 'styled-components';

export const ProposalFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 28.438rem;
  margin: 2.5rem auto;

  @media (min-width: 1024px) {
    width: 30rem;
  }
`;
