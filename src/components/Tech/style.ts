import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;

  .tecs {
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

    .tecs-current {
      margin-top: 4rem;
      div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
      }
    }

    .tecs-old {
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
