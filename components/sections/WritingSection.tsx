import { 
    WritingSectionContainer,
    WritingSectionTitle,
    WritingSectionTitleFlex,
    WritingSectionList,
    WritingListItem,
    WritingName,
    WritingIntroduction
} from "@/styles/sections.styles"
import { WRITINGS_DATA } from '@/data/portfolioData'; 
import ArrowRightIcon from "@/components/ui/icons/ArrowRightIcon";


export default function WritingSection() {
    return (
        <WritingSectionContainer>
            <WritingSectionTitleFlex>
                <WritingSectionTitle>Writing</WritingSectionTitle>
                <ArrowRightIcon />
            </WritingSectionTitleFlex>

            <WritingSectionList>
                {WRITINGS_DATA.map((writing) => (
                    <WritingListItem key={writing.id}>
                        <WritingName>{writing.name}</WritingName>
                        <WritingIntroduction>{writing.introduction}</WritingIntroduction>
                    </WritingListItem>
                ))}
            </WritingSectionList>
        </WritingSectionContainer>
    )
}