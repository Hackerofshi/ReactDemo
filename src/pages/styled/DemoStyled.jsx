import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: blue;
  margin-top: 10px;
  color: white;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default class DemoStyled extends React.Component {
  render() {
    return (
      <Container>
        <Button>测试</Button>
      </Container>
    );
  }
}
