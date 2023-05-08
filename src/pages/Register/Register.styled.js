import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: 20px;
`;

export const Input = styled.input`
  padding: 16px 20px;
  border: none;
  border-radius: 4px;
  background-color: #f1f1f1;
  width: 400px;
  padding: 5px;
`;

export const Button = styled.button`
  display: inline-block;
  align-items: center;
  padding: 10px 24px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  color: #fff;
  background: #2196f3;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  :focus,
  :hover {
    background-color: #7b68ee;
  }
  width: 100px;
`;
