import { Icon } from "@iconify/react";
import Logo from "./images/logo.svg";
// 아이콘 로드

// 배경 이미지
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";

export { HeroLight as Light };
export { HeroDark as Dark };

export const Blog = <Icon icon="ph:link-bold" />;

// 깃허브 연동을 위한 유저 네임
export const githubUsername = "KimuYounguWoo";

// 네비게이션 로고 이미지
export const navLogo = undefined;

// 백준 아이디
export const bojname = 'dyw1014';

// About Page
export const moreInfo =
  "저는 가천대학교 컴퓨터공학과를 다니고 있는 컴퓨터공학과 김용우입니다. 백엔드에서는 자바와 자바스크립트를 주력으로 사용하고, 프론트엔드에서는 리액트와 뷰를 사용하는 개발자 지망생입니다.";

// Career Page Data
export const careerData = [
  {
    id: 1,
    year: "2019",
    career: [
      {id: 0, cer: "가천대학교 컴퓨터공학과 입학"},
    ]
  },
  {
    id: 2,
    year: "2020",
    career: [
      {id: 0, cer: "1학년 재학"},
    ]
  },
  {
    id: 3,
    year: "2021",
    career: [
      {id: 0, cer: "군 입대"},
    ]
  },
  {
    id: 4,
    year: "2022",
    career: [
      {id: 0, cer: "정보처리기능사 취득"},
      {id: 1, cer: "백준 알고리즘 골드 달성"},
      {id: 2, cer: "프로그래머스 lv.3 달성"},
      {id: 3, cer: "첫 프로젝트 나만의 냉장고 (Spring Boot)"},
    ]
  },
  {
    id: 5,
    year: "2023",
    career: [
      {id: 0, cer: "네트워크관리사 2급 취득"},
      {id: 1, cer: "AWS Practitioner 취득"}
    ]
  },
  {
    id: 6,
    year: "2024",
    career: [
      {id: 0, cer: "정보처리기사 취득"},
      {id: 1, cer: "리눅스 마스터 2급 취득"},
      {id: 2, cer: "프로그래머스 lv.4 달성"},
      {id: 3, cer: "SOMA 합격"}
    ]
  },
]

// Skill Page Data
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="mdi:language-html5" className="display-4" />,
    name: "HTML5",
    description : "HTML5는 인터넷 페이지 표준 페이지 마크업언어입니다.",
    desList : [
      {id: 0, des: "웹 페이지의 구조를 설명하는 마크업 언어입니다."},
      {id: 1, des: "웹 페이지 또는 모바일 페이지 개발을 위해 반드시 알아야하는 언어입니다."},
    ]
  },
  {
    id: 2,
    skill: <Icon icon="ion:logo-css3" className="display-4" />,
    name: "CSS3",
    description: "CSS3는 HTML5와 함께 사용되는 스타일 시트 언어입니다.",
    desList : [
      {id: 0, des: "CSS3 언어는 프런트엔드 개발자의 필수 언어입니다."},
      {id: 1, des: "HTML 태그마다 스타일을 적용할 수 있습니다."},
      {id: 2, des: "여러가지 스타일시트가 있으므로, 적용 방법을 반드시 알아야합니다."}
    ]
  },
  {
    id: 3,
    skill: <Icon icon="fa6-brands:js" className="display-4" />,
    name: "JavaScript",
    description: "JavaScript는 웹 페이지를 동적으로 만들기 위해 사용되는 언어입니다.",
    desList : [
      {id: 0, des: "단순히 정적인 정보를 표시하는 것뿐만 아닌, 동적인 정보를 표시할 수 있습니다."},
      {id: 1, des: "변수를 생성하고 저장할 수 있습니다."},
      {id: 2, des: "DOM을 사용하여, HTML과 CSS를 조작합니다."},
      {id: 3, des: "이벤트를 사용하여, 사용자와 상호작용할 수 있습니다."},
      {id: 4, des: "브라우저의 보안을 위해, 다른 도메인의 정보를 가져올 수 없습니다."},
    ]
  },
  {
    id: 4,
    skill: <Icon icon="devicon:spring" className="display-4" />,
    name: "Spring",
    description: "Spring은 자바 기반의 프레임워크입니다.",
    desList : [
      {id: 0, des: "경량 컨테이너로 자바 객체를 직접 관리합니다."},
      {id: 1, des: "제어의 역전(IoC)을 통해 어플리케이션의 느슨한 결합을 도와줍니다."},
      {id: 2, des: "AOP를 통해 어플리케이션의 핵심기능과 공통기능을 분리하여 개발할 수 있습니다."},
      {id: 3, des: "트랜잭션 관리를 지원합니다."},
      {id: 4, des: "영속성과 관련된 다양한 서비스를 제공합니다."},
      {id: 5, des: "DI를 통해 객체간의 의존관계를 설정할 수 있습니다."},
      {id: 6, des: "스프링은 POJO를 사용하여 간단하고, 테스트가 용이한 어플리케이션을 만들 수 있습니다."},
      {id: 7, des: "스프링은 오픈소스이며, 커뮤니티가 활발합니다."},
    ]
  },
  {
    id: 5,
    skill: <Icon icon="simple-icons:springboot" className="display-4" />,
    name: "Spring Boot",
    description: "Spring Boot는 Spring을 사용하여 어플리케이션을 빠르게 개발할 수 있도록 도와주는 프레임워크입니다.",
    desList : [
      {id: 0, des: "자주 사용되는 라이브러리들의 의존성을 관리해줍니다."},
      {id: 1, des: "내장 WAS를 사용하여, 별도의 WAS를 설치하지 않아도 됩니다."},
      {id: 2, des: "스프링 부트 CLI를 통해, 간단한 스크립트를 작성할 수 있습니다."},
      {id: 3, des: "스프링 부트는 오픈소스이며, 커뮤니티가 활발합니다."},
      {id: 4, des: "Auto Configuration을 통해, 어플리케이션을 빠르게 개발할 수 있습니다."},
    ]
  },
  {
    id: 6,
    skill: <Icon icon="logos:java" className="display-4" />,
    name: "Java",
    description: "Java는 객체지향 프로그래밍 언어입니다.",
    desList : [
      {id: 0, des: "객체지향 프로그래밍 언어입니다."},
      {id: 1, des: "인터프리터 언어이자 컴파일 언어입니다."},
      {id: 2, des: "포인터를 사용하지 않습니다."},
      {id: 3, des: "가비지 컬렉터를 사용하여, 메모리를 자동으로 관리합니다."},
      {id: 4, des: "멀티 스레드를 지원합니다."},
      {id: 5, des: "동적 로딩을 지원합니다."},
    ]
  },
  {
    id: 7,
    skill: <Icon icon="logos:python" className="display-4" />,
    name: "Python",
    description: "Python은 인터프리터 언어입니다.",
    desList : [
      {id: 0, des: "대화형 언어입니다."},
      {id: 1, des: "객체지향 프로그래밍 언어입니다."},
      {id: 2, des: "초보자가 배우기 쉬운 언어입니다."},
      {id: 3, des: "이식성이 좋습니다."},
      {id: 4, des: "유지보수가 쉽습니다."},
      {id: 5, des: "다양한 라이브러리를 제공합니다."},
    ]
  },
  {
    id: 8,
    skill: <Icon icon="bi:git" className="display-4" />,
    name: "Git",
    description: "분산형 버전 관리 시스템입니다.",
    desList : [
      {id: 0, des: "효율적인 협업을 위해 사용됩니다."},
      {id: 1, des: "버전 관리가 용이합니다."},
      {id: 2, des: "가지 치기와 병합을 이용해, 버전 관리를 할 수 있습니다."},
      {id: 3, des: "가볍고 빠릅니다."},
      {id: 4, des: "데이터의 무결성을 보장합니다."}
    ]
  },
];


// Project Page Data | 만약 github에 프로젝트가 없을 경우, 아래 데이터로 대체
export const filteredProjects = ["example-1", "example-2", "example-3"];
export const projectCardImages = [
  {
    name: "example-1",
    image: Logo,
  },
];