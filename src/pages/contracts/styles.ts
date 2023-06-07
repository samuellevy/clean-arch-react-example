import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 1rem;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const Card = styled.div<{ bg?: string; color?: string }>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: ${(props) => (props.bg ? props.bg : '#bde8fb')};
  color: ${(props) => (props.color ? props.color : '#000000')};
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  max-width: 10rem;

  label {
    font-weight: bold;
    font-size: 0.8rem;
  }

  span {
    font-size: 1.8rem;
  }
`;
