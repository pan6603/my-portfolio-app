import { 
    HeaderContainer,
    MyNameTitle,
    MyjobTitle,
    ProfileImage
} from '@/styles/header.styles';



export default function Header() {
    return (
        <>
            <HeaderContainer>
                <MyNameTitle href="/">ChaeSeong</MyNameTitle>
                <MyjobTitle>React Developer</MyjobTitle>
                <ProfileImage></ProfileImage>
            </HeaderContainer>
        </>
    )
}