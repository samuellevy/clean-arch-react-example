import styled from 'styled-components';

export const Container = styled.nav`
  height: 100vh;
  min-height: max-content;
  background-color: #162056;
  color: #ffffff;
  width: 16rem;
  border-top-right-radius: 20px 20px;

  h1 {
    padding: 1rem;
  }
`;

export const NavList = styled.ul`
  margin-top: 2rem;

  li {
    padding: 1rem;
    border-bottom: 1px solid #ffffff;
    &:hover {
      background-color: #ffffff;
      cursor: pointer;
      a {
        color: #162056;
      }
    }
    a {
      color: #ffffff;
    }
  }
`;
