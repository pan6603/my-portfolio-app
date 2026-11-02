import Link from "next/link";
import styled from "styled-components";


export const HeaderContainer = styled.header`
    max-width: 700px;
    width: 100%;
    height: fit-content;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const MyNameTitle = styled(Link)`
    font-family: 'Fira Code', 'JetBrains Mono', 'D2Coding', Consolas, Monaco, 'Courier New', monospace;
    font-weight: 500;
    font-size: 24px;
    line-height: 1.75rem;

    color: #121C2C;
`


export const MyjobTitle = styled.span`
    font-weight: 500;
    font-size: 15px;
    line-height: 1.75rem;

    color: #404752;
`

export const ProfileImage = styled.div`
    max-width: 120px;
    width: 100%;
    height: 120px;

    border-radius: 50%;
    background-color: #121C2C;
`
