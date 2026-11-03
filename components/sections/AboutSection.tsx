import { 
    AboutSectionContainer,
    AboutMe,
    AboutMeDescription 
} from '@/styles/sections.styles'

const highlightStyle = {
  fontFamily: "'Fira Code', 'JetBrains Mono', 'D2Coding', Consolas, monospace",
  fontWeight: "600",
  color: "#121C2C",
};


export default function AboutSection() {
    return (
        <>
            <AboutSectionContainer>
                <AboutMe>About Me</AboutMe>
                <AboutMeDescription>
                    안녕하세요! <span style={highlightStyle}>ChaeSeong</span>입니다. <br />
                    저는 2024년부터 코딩을 시작했고, 매일 컴포넌트를 구현하는 프론트엔드 개발자입니다. 

                </AboutMeDescription>
            </AboutSectionContainer>
        </>
    )
}