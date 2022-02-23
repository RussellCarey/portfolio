import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Spinner = styled.img`
  //
`;

export default function Loading() {
  return (
    <Container>
      {/* <Spinner /> */}
      <h1> LOADING </h1>
    </Container>
  );
}
