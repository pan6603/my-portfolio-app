import Image from "next/image"
import ArrowRightIconSvg from "@/public/icons/arrow-right-icon.svg"
import { ArrowRightIconContainer } from "@/styles/icons.styles"




export default function ArrowRightIcon() {
    return (
        <>
            <ArrowRightIconContainer>
                <Image 
                    src={ArrowRightIconSvg}
                    alt="arrow-right-icon"
                    width={18}
                    height={18}
                />
            </ArrowRightIconContainer>
        </>
    )
}