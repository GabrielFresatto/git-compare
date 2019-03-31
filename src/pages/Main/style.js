import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
`;

export const Form = styled.form`
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
  display: flex;

  input {
    flex: 1;
    padding: 0 20px;
    border-radius: 5px;
    color: #444;
    height: 55px;
    font-size: 18px;
    border: ${props => (props.withError ? '1px solid #f00' : 0)};
  }

  button {
    background-color: #63f5b0;
    padding: 0 20px;
    height: 55px;
    color: #fff;
    border: none;
    margin-left: 10px;
    font-size: 20px;
    font-weight: bold;
    border-radius: 5px;
    transition: .2s;

    &:hover {
      background-color: #52d89f;
    }
  }
`;
