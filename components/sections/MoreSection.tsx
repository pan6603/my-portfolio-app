import { 
    MoreSectionContainer,
    MoreTitle,
    SnsFlex
} from "@/styles/sections.styles"
import GithubIcon from "@/components/ui/icons/GithubIcon"
import ThreadsIcon from "@/components/ui/icons/ThreadsIcon"

export default function MoreSection() {
    return (
        <>
            <MoreSectionContainer>
                <MoreTitle>More</MoreTitle>
                <SnsFlex>
                    <GithubIcon />
                    <ThreadsIcon />
                </SnsFlex>
                
            </MoreSectionContainer>
        </>
    )
}