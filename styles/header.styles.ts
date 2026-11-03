import Link from "next/link";
import styled from "styled-components";


export const HeaderContainer = styled.header`
    max-width: 700px;
    width: 100%;
    height: fit-content;

    display: flex;
    flex-direction: column;
    gap: 8px;

    padding-left: 16px;

`

export const HeaderWrapper = styled.div`
    max-width: 700px;
    width: 100%;

    display: flex;
    flex-direction: column;
`

export const MyNameTitle = styled(Link)`
    font-family: 'Fira Code', 'JetBrains Mono', 'D2Coding', Consolas, Monaco, 'Courier New', monospace;
    font-weight: 500;
    font-size: 24px;
    line-height: 1.75rem;

    color: #121C2C;
`


export const MyjobTitle = styled.span`
    font-family: 'Inter', 'Pretendard', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.75rem;

    color: #717985;
`

export const ProfileImage = styled.div`
    max-width: 120px;
    width: 100%;
    height: 120px;

    border-radius: 50%;
    background-color: #121C2C;
`
