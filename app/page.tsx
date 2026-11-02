'use client';

import styled from 'styled-components';

const Title = styled.h1`
  font-size: 3rem;
  color: #3b82f6;
  text-align: center;
  margin-top: 20vh;
  font-weight: bold;
`;

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8fafc;
`;

export default function Home() {
  return (
    <Container>
      <Title>Hello World</Title>
    </Container>
  );
}