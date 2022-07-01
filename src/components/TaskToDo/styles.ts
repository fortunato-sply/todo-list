import styled from 'styled-components'
import checked from '../../assets/checked.svg'

export const Container = styled.div`
  width: 100%;
  background: var(--gray-500);
  padding: 1rem 3.25rem;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;

  margin-bottom: 2rem;
  
  input {
    display: none;
  }

  input + label:before {
    content: '';
    width: 18px;
    height: 18px;
    border-radius: 99px;
    border: 3px solid var(--blue);
    background-color: transparent;
    display: inline-block;
    vertical-align: middle;   
    margin-right: 1rem;
    margin-bottom: 3px;
    align-self: flex-start;
    transition: background ease-in 120ms;
  }

  div {
    width: 100%;
  }

  label {
    color: var(--gray-100);
  }

  input:checked + label {
    color: var(--gray-300);
    text-decoration: line-through;
  }

  input:checked + label:before {
    background:url(${checked});
    background-repeat: no-repeat;
    background-size: 0.75rem;
    background-position: center;

    background-color: var(--purple-dark);
    border-color: var(--purple-dark);
  }

  button {
    border: 0;
    background: transparent;
    color: var(--gray-300);

    display: flex;
    align-items: center;
    cursor: pointer;

    transition: color 0.2s;
  }

  button:hover {
    color: var(--danger);
  }
`