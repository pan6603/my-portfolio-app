import Image from "next/image"

import ThreadsIconSvg from "@/public/icons/threads-icon.svg"
import { ThreadsIconContainer } from "@/styles/icons.styles"


export default function ThreadsIcon() {
    return (
        <>
            <ThreadsIconContainer>
                <Image 
                    src={ThreadsIconSvg}
                    alt="threads-icon"
                    width={32}
                    height={32}
                />
            </ThreadsIconContainer>
        </>
    )
}