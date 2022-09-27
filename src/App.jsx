import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 10px;
  min-height: calc(100vh - 50px);
  position: relative;
  margin-bottom: 50px;
`;

export default function App() {
  return (
    <Container>
      Hello world
    </Container>
  );
}
