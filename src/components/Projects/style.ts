import styled from "styled-components";

export const Container = styled.section`
  h2 {
    font-size: 3rem;
    margin: 0;
    max-width: 10ch;
    span {
      color: #263138;
    }
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    justify-content: center;

    img {
      height: 150px;
    }
    p {
      font-size: 18px;
      margin: 5px 0;
      padding-left: 8px;
    }
  }

  .infos {
    margin-bottom: 8rem;
  }
`;
