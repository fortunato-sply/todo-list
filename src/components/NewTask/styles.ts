import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 46rem;
  height: 3.375rem;
  margin: 0 auto;
  justify-content: center;
  align-items: center;

  margin-top: -1.75rem;
`

export const Content = styled.div`
  form {
    display: flex;
    flex-direction: row;
    gap: 8px;
    

    textarea {
      background: var(--gray-500);
      width: 39.875rem;
      padding: 16px;
      border-radius: 8px;
      border: 0;
      font-size: 1rem;
      outline: none;
      color: var(--gray-300);
      resize: none;
      height: 4rem;
    }

    textarea:focus {
      outline: 1px solid var(--blue-dark);
    }

    button {
      width: 5.625rem;
      border-radius: 8px;
      border: 0;

      color: var(--gray-100);
      background: var(--blue-dark);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      font-size: 0.875rem;
      font-weight: 700;
      cursor: pointer;

      transition: background 0.2s;
    }

    button:hover {
      background: var(--blue);
    }

    button:disabled {
      opacity: 0.7;
      cursor: not-allowed;

      :hover {
        background: var(--blue-dark);
      }
    }
  }
`