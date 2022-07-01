import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 46rem;
  margin: 0 auto;
  padding-top: 4rem;
`

export const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 0.875rem;

  padding-bottom: 1.5rem;
`

export const Counter = styled.span`
  margin-left: 8px;
  color: var(--gray-200);
  background: var(--gray-400);
  padding: 0px 8px;
  border-radius: 999px;
  font-weight: bold;
`

export const CreatedTasks = styled.span`
  color: var(--blue);
  font-weight: bold;
`

export const CompletedTasks = styled.span`
  color: var(--purple);
  font-weight: bold;
`

export const Content = styled.div`

`