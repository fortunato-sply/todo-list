import styled from 'styled-components'

export const Container = styled.div`
  width: 46rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  
  border-top: 1px solid var(--gray-500);
  border-radius: 8px;
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  padding: 4rem 1.5rem;

  img {
    max-width: 56px;
    max-height: 56px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--gray-300);
  }
`