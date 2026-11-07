import { ContentSectionContainer } from "@/styles/sections.styles";
import AboutSection from "@/components/sections/AboutSection";
import WritingSection from '@/components/sections/WritingSection'
// import ProjectSection from '@/components/sections/ProjectSection'
import MoreSection from '@/components/sections/MoreSection'

export default function ContentSection() {
    return (
        <>
            <ContentSectionContainer>
                <AboutSection />
                {/* <ProjectSection /> */}
                <WritingSection />
                <MoreSection />
            </ContentSectionContainer>
        </>
    )
}