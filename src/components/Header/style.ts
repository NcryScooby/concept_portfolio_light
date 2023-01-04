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
      align-items: center;
      justify-content: center;
      gap: 2rem;
      li {
        button {
          background: #445964;
          color: #ffffff;
          border: none;
          font-size: 16px;
          padding: 10px 20px;
          border-radius: 4px;
        }
      }
    }
  }
`;
