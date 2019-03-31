import styled from 'styled-components';

export const Repo = styled.div`
  background: #fff;
  margin: 10px 10px;
  width: 22.8%;
  position: relative;

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;

    img {
      width: 50px;
      margin-bottom: 10px;
    }

    small {
      color: #444;
    }
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    width: 100%;

    li {
      max-width: 100%;
      padding: 10px 20px;

      span {
        font-weight: bolder;
      }

      small {
        color: #444;
        margin-left: 10px;
      }

      &:nth-child(2n - 1) {
        background: #f5f5f5;
      }
    }
  }

  button {
    position: absolute;
    top: 5px;
    right: 5px;
    padding: 10px;
    border-radius: 17px;
    border: none;
    box-shadow: -1px 1px 2px 0px #00000063;
    background: #ea5656;
    color: #fff;
    transition: .2s;
    cursor: pointer;

    &:hover {
      background: #f52e2e;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 940px;
`;
