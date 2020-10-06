import styled, { css } from "styled-components";

export const Container = styled.div`
  flex: 1;
  padding: 40px;
`;

export const Header = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    margin-bottom: 30px;
  }
`;

export const Content = styled.div`
  padding: 50px 180px 50px 180px;
  flex-direction: block;
  background: rgba(224, 226, 227, 0.9);
  border-radius: 8px;
  min-height: 400px;
  width: 300px;
  margin-left: 25%;
`;

export const InputDiv = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    height: 50px;
    min-width: 350px;
    border: 0;
    border-radius: 4px;
    background: #ebeff5;
    color: #252a31;
    padding-left: 20px;
  }

  button {
    background: #61dea4;
    border: 0;
    height: 50px;
    margin-left: 20px;
    min-width: 100px;
    border-radius: 4px;
    color: #fff;
    font-weight: bold;

    &:hover {
      opacity: 0.9;
    }
  }
`;

export const List = styled.div`
  padding-top: 20px;
  width: 100%;

  ul {
    li {
      list-style-type: none;
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 20px;

      button {
        border: 0;
        padding: 10px;
        margin: 4px 10px;
        border-radius: 50%;
        background: #dadada;

        &:hover {
          opacity: 0.5;
        }

        ${(props) =>
          props.confirmed &&
          css`
            background: #f45e6d;
          `}
      }

      hr {
        margin-bottom: 10px;
      }
    }
  }
`;
