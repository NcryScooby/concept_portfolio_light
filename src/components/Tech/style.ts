import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;

  .techs {
    h3 {
      font-size: 2rem;
      margin: 0;
      color: #263138;
      span {
        color: #445964;
      }
    }

    p {
      margin: 5px;
    }

    img {
      margin-top: 1rem;
      cursor: pointer;
    }

    .techs-current {
      margin-top: 4rem;
      div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
      }
    }

    .techs-old {
      div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        margin-bottom: 6rem;
      }
    }
  }

  .title {
    margin-bottom: 4rem;
  }

  h2 {
    font-size: 3rem;
    margin: 0;
    span {
      color: #263138;
    }
  }
`;
