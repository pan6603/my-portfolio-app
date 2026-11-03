'use client';

import styled from 'styled-components';
import Header from '@/components/layout/Header';
import ContentSection from '@/components/sections/ContentSection';

const MainContainer = styled.main`
  max-width: 1920px;
  width: 100%;
  height: fit-content;

  padding-top: 6rem;
  margin: 0 auto;
  background-color: #FDFDFC;

  overflow-y: visible
`;

const ContentWrapper = styled.div`
  max-width: 700px;
  width: 100%;
  height: 1500px;
  
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 32px;
`

export default function Home() {
  return (
    <MainContainer>
      <ContentWrapper>
        <Header />
        <ContentSection />
      </ContentWrapper>
    </MainContainer>
  );
}