import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  h2 {
    font-size: 3rem;
    margin: 0;
    span {
      color: #263138;
    }
  }

  p {
    max-width: 80ch;
  }

  #fabricio {
    width: 10%;
  }

  .hard-skills {
    margin: 4rem 0 2rem 0;
  }

  .skills {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 4rem;
    grid-row-gap: 2rem;
    justify-items: center;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
  }
`;
