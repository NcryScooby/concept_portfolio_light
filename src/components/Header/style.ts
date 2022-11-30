import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .links {
    ul {
      display: flex;
      gap: 2rem;
    }
  }
`;
