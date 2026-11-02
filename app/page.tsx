'use client';

import styled from 'styled-components';
import Header from '@/components/layout/Header';
import ContentSection from '@/components/sections/ContentSection';

const MainContainer = styled.main`
  max-width: 1920px;
  width: 100%;
  height: 100%;

  padding-top: 7rem;

  background-color: #FDFDFC;

  overflow-y: visible
`;

const ContentWrapper = styled.div`
  max-width: 700px;
  width: 100%;
  height: 920px;
  
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
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