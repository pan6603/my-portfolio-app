import { 
    MoreSectionContainer,
    MoreTitle,
    MoreDescription
} from "@/styles/sections.styles"

const highlightStyle = {
    fontWeight: "500",       
    textDecoration: "underline", 
};

export default function MoreSection() {
    return (
        <>
            <MoreSectionContainer>
                <MoreTitle>More</MoreTitle>
                <MoreDescription>
                    실시간 리액트 트렌드는 <a href="" style={highlightStyle}>Twitter에서</a>, 
                    프로젝트의 전체 코드는 <a href="" style={highlightStyle}>GitHub에서</a> 확인하실 수 있습니다.
                </MoreDescription>
            </MoreSectionContainer>
        </>
    )
}