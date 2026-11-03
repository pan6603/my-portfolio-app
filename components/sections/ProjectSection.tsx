import { 
    ProjectSectionContainer,
    ProjectSectionTitle,
    ProjectSectionTitleFlex,
    ProjectSectionList,
    ProjectListItem,
    ProjectName,
    ProjectIntroduction
} from "@/styles/sections.styles"
import { PROJECTS_DATA } from '@/data/portfolioData'; 
import ArrowRightIcon from "@/components/ui/icons/ArrowRightIcon";

export default function ProjectSection() {
    return (
        <ProjectSectionContainer>
            <ProjectSectionTitleFlex>
                <ProjectSectionTitle>Projects</ProjectSectionTitle>
                <ArrowRightIcon />
            </ProjectSectionTitleFlex>

            <ProjectSectionList>
                {PROJECTS_DATA.map((project) => (
                    <ProjectListItem key={project.id}>
                        <ProjectName>{project.name}</ProjectName>
                        <ProjectIntroduction>{project.introduction}</ProjectIntroduction>
                    </ProjectListItem>
                ))}
            </ProjectSectionList>
        </ProjectSectionContainer>
    )
}