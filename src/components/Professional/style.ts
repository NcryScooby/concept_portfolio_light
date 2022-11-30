import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  .title {
    display: flex;
    justify-content: end;
    gap: 4rem;
    div {
      display: flex;
      align-items: flex-end;
      p {
        text-align: end;
        font-size: 18px;
        margin: 0;
        max-width: 30ch;
        padding-bottom: 4px;
      }
    }
    h2 {
      max-width: 10ch;
      font-size: 48px;
      margin: 0;
      span {
        color: #263138;
      }
    }
  }

  .cards {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 8rem;
    height: 300px;
    align-items: flex-end;

    p {
      color: #eeeeee;
      font-size: 14px;
      margin: 0.5rem;
      opacity: 0.5;
    }

    h6 {
      color: #eeeeee;
      font-size: 16px;
      margin: 1rem;
    }

    strong {
      font-size: 18px;
    }

    div {
      width: 350px;
      height: 300px;
      border-radius: 8px;
      background-color: #263138;
      text-align: center;
      padding: 2rem;
      font-size: 1rem;

      &:nth-child(2) {
        background-color: #3e5a65;
        color: #263138;
        margin-bottom: 2rem;
      }
    }
  }

  #quote {
    position: absolute;
    top: 550px;
    left: 560px;
    width: 60px;
    height: 60px;
  }

  .final-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4rem;
    p {
      max-width: 40ch;

      &:last-child {
        color: #263138;
        font-size: 24px;
        font-weight: bold;
      }
    }
  }
`;
