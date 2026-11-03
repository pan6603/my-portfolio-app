import { 
    HeaderContainer,
    HeaderWrapper,
    MyNameTitle,
    MyjobTitle,
    ProfileImage,
} from '@/styles/header.styles';



export default function Header() {
    return (
        <>
            <HeaderContainer>
                <HeaderWrapper>
                    <MyNameTitle href="/">ChaeSeong</MyNameTitle>
                    <MyjobTitle>React Developer</MyjobTitle>
                </HeaderWrapper>
                
                <ProfileImage></ProfileImage>
            </HeaderContainer>
        </>
    )
}