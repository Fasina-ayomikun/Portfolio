import { FaReact, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiJavascript1 } from "react-icons/di";
export const socialIcon = [
  {
    id: "1",
    name: "Linkedin",
    social_url: "https://www.linkedin.com/in/ayomikun-fasina-b791ab225",
    icon: <FaLinkedinIn />,
  },
  {
    id: "2",
    name: "Github",
    social_url: "https://github.com/Fasina-ayomikun",
    icon: <FaGithub />,
  },
];

export const skills = [
  {
    id: "1",
    name: "HTML",
    info: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident porro dolorem qui et quis dignissimos quidem alias numquam adipisci odit!",
    icon: <AiFillHtml5 />,
    stars: "🌟🌟🌟🌟🌟",
  },
  {
    id: "2",
    name: "CSS",
    info: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident porro dolorem qui et quis dignissimos quidem alias numquam adipisci odit!",
    icon: <DiCss3 />,
    stars: "🌟🌟🌟🌟🌟",
  },
  {
    id: "3",
    name: "Javascript",
    info: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident porro dolorem qui et quis dignissimos quidem alias numquam adipisci odit!",
    icon: <DiJavascript1 />,
    stars: "🌟🌟🌟🌟",
  },
  {
    id: "4",
    name: "React",
    info: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident porro dolorem qui et quis dignissimos quidem alias numquam adipisci odit!",
    icon: <FaReact />,
    stars: "🌟🌟🌟",
  },
];
