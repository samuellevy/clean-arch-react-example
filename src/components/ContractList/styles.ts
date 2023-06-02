import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  table {
    border-collapse: collapse;
    width: 100%;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    font-size: 18px;

    th,
    td {
      text-align: left;
      padding: 16px;
    }

    tr:nth-child(even) {
      background-color: #f2f2f2;
    }

    tr:hover {
      background-color: #ddd;
    }
  }
`;
