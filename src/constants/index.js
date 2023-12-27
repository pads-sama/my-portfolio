import {
  Devops,
  Github,
  Instagram,
  Lighting,
  Linkedin,
  Responsive,
  SEO,
} from "../assets";

export const SidebarMenu = ["Home", "About", "Skills", "Projects", "Contact"];

export const socials = [
  {

    image: Github,
    alt: "github icon",
    link: 'https://github.com/pads-sama'
  },
  {
    image: Linkedin,
    alt: "linkedin icon",
  },
  {
    image: Instagram,
    alt: "instagram icon",
  },
];


//skills data
export const skills = [
  {
    label: "HTML",
    rate: "90%",
    style: ' calc((90% - 6rem))'
  },
  {
    label: "CSS",
    rate: "90%",
    style: ' calc((90% - 6rem))'
  },
  {
    label: "JavaScript",
    rate: "60%",
    style: ' calc((60% - 6rem))'
  },
  {
    label: "ReactJs",
    rate: "50%",
    style: ' calc((50% - 6rem))'
  },
  {
    label: "TailwindCSS",
    rate: "70%",
    style: ' calc((70% - 6rem))'
  },
  {
    label: "Bootstrap",
    rate: "50%",
    style: ' calc((50% - 6rem))'
  },
  {
    label: "MySQL",
    rate: "60%",
    style: ' calc((60% - 6rem))'
  },
  
  {
    label: "Git",
    rate: "55%",
    style: ' calc((55% - 6rem))'
  },
  
];

export const webAttributes = [
  {
    icon: Responsive,
    title: "Responsive",
    description:
      "Adjusts to different screens and devices for a seamless experience.",
  },
  {
    icon: SEO,
    title: "Search Engine Optimization (SEO)",
    description:
      "Apply SEO best practices for better search engine visibility.",
  },
  {
    icon: Lighting,
    title: "Fast Loading ",
    description: "Optimizing loading times to enhance user satisfaction.",
  },
  {
    icon: Devops,
    title: "Dynamic",
    description: " Crafting websites with dynamic and interactive features.",
  },
];

// Projects data