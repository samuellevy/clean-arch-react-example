import styled from 'styled-components';
import { Field, Form } from 'formik';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  height: 100%;
  background-color: #f2f2f2;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  max-width: 400px;
  padding: 1rem;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #333;
`;

export const FormElement = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

export const Input = styled(Field)`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  outline: none;
  transition: border-color 0.2s ease-in-out;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 0.5rem;
  border: none;
  border-radius: 0.25rem;
  background-color: #333;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
`;

export const FieldError = styled.span`
  font-size: 0.75rem;
  color: #ff0000;
`;
