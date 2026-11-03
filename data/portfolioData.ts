interface Project {
    id: string; 
    name: string;
    introduction: string;
}

interface Writing {
    id: string; 
    name: string;
    introduction: string;
}

export const PROJECTS_DATA: Project[] = [
    {
        id: "1",
        name: "TraceSearch",
        introduction: "로컬 파일 내 텍스트를 고속으로 검색하고 개인 정보를 마스킹해 주는 윈도우 데스크톱 유틸리티 앱"
    },
    {
        id: "2",
        name: "SEOUL TABLE",
        introduction: "프리미엄 한식 다이닝을 위한 PC, 태블릿, 모바일 전용 반응형 레이아웃 웹사이트"
    },
    {
        id: "3",
        name: "DevCache Cleaner",
        introduction: "불필요한 node_modules 및 빌드 캐시를 간편하게 정리해 주는 개발자용 로컬 관리 도구"
    },
    {
        id: "4",
        name: "Carrot Market Clone",
        introduction: "외부 라이브러리 없이 순수 React와 커스텀 인터랙션으로 구현한 중고거래 플랫폼 클론 코딩"
    },
    {
        id: "5",
        name: "CodeShorts Reel",
        introduction: "개발 과정과 멋진 마이크로 인터랙션을 애니메이션 쇼츠 콘텐츠로 공유하는 플랫폼"
    },
]



export const WRITINGS_DATA: Writing[] = [
    {
        id: "1",
        name: "You Don’t Need Animations",
        introduction: "우리가 생각보다 불필요한 애니메이션을 너무 자주 넣고 있는 이유"
    },
    {
        id: "2",
        name: "Building TraceSearch in React",
        introduction: "Wails와 React를 활용해 로컬 텍스트 검색 데스크톱 앱을 만들며 배운 점들"
    },
    {
        id: "3",
        name: "The Cost of Component Re-renders",
        introduction: "불필요한 리렌더링을 추적하고 프론트엔드 성능을 최적화하는 실전 전략"
    },
    {
        id: "4",
        name: "Why I Avoid UI Component Libraries",
        introduction: "외부 라이브러리 의존성을 낮추고 커스텀 컴포넌트를 직접 구현하는 이유"
    },
    {
        id: "5",
        name: "Designing for Multiple Devices",
        introduction: "단일 반응형 레이아웃 대신 PC, 태블릿, 모바일 페이지를 따로 분리해 구축한 경험"
    },
]