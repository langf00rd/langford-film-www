import { SocialLink, SpecRow } from "./types";

export const STILLS = [
  { src: "/stills/burning-man.png", alt: "", title: "Video #1" },
  { src: "/stills/burning-man.png", alt: "", title: "Video #1" },
  { src: "/stills/oraimo.png", alt: "", title: "Video #2" },
  { src: "/stills/home-alone.png", alt: "", title: "Video #3" },
  { src: "/stills/gridlock.png", alt: "", title: "Video #4" },
  { src: "/stills/night.png", alt: "", title: "Video #4" },
];

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "#works", label: "Works" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export const SPEC_ROWS: SpecRow[] = [
  { label: "Based", value: "Accra, Ghana 🇬🇭" },
  { label: "Format", value: "Digital" },
  { label: "Specialty", value: "Film · Music Video · Documentary" },
  { label: "Status", value: "Open For Work" },
];

export const EMAIL = "langfordquarshie21@gmail.com";
export const YOUTUBE_LINK = "https://www.youtube.com/@langford.mp4";
export const INSTAGRAM_LINK = "https://www.instagram.com/langf00rd/";

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "Instagram", href: INSTAGRAM_LINK },
  { label: "YouTube", href: YOUTUBE_LINK },
];

export const PROJECTS = [
  {
    title: "Home Alone",
    category: "Short Film",
    year: "2026",
    url: "https://www.instagram.com/p/DbidhtIghcD/",
    image: "/stills/home-alone.png",
  },
  {
    title: "Burning Man",
    category: "Short Film",
    year: "2026",
    url: "https://www.instagram.com/p/Dakvvi9gEhL",
    image: "/stills/burning-man.png",
  },
  {
    title: "In The Night",
    category: "Post Card",
    year: "2026",
    url: "https://www.instagram.com/p/Da8lfoHskgm/",
    image: "/stills/night.png",
  },
];
