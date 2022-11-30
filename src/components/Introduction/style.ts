import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: space-between;

  .infos {
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    gap: 6rem;

    .networks {
      display: flex;
      gap: 1rem;
      align-items: center;
    }

    p {
      font-size: 24px;
      margin: 0;
    }

    h2 {
      font-size: 72px;
      text-transform: uppercase;
      max-width: 20ch;
      margin: 0;
    }
  }

  .illustration {
    margin-top: 100px;
    #img {
      width: 100%;
    }
  }
`;

export const Button = styled.button`
  background: #263138;
  border: none;
  padding: 15px 25px;
  font: inherit;
  outline: none;
  color: #ffffff;
  border-radius: 4px;
  font-weight: bold;

  &:hover {
    background: #1e252c;
  }
`;
