import styled from "styled-components";

export const Wrapper = styled.main`
  display: flex;
  align-items: center;
  background-color: #453823;
  flex-direction: column;
  min-height: 100vh ;
  color: #fff;
  font-family: 'Arial', sans-serif;
`;

export const FormContainer = styled.div`
  width: 100%;
  max-width: 900px;
  padding: 50px;
`;

export const Input = styled.input`
  padding: 16px 8px;
  margin-bottom: 8px;
  width: 100%;
  border-radius: 12px;
  font-weight: bold;
  border: none;
  outline: none;
`;
export const Textarea = styled.textarea`
  width: 100%;
  padding: 16px 8px;
  border: none;
  outline: none;
  border-radius: 12px;
  font-weight: bold;
`

export const Button = styled.button`
  background-color: #55DBCB;
  width: 100%;
  padding: 16px 8px;
  border: none;
  outline: none;
  border-radius: 12px;
  font-weight: bold;
  
`;
