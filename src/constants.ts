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
    alt: "Still from Home Alone, a short film directed and shot by Langford K. Quarshie featuring a lone character being stalked by someone hiding in his bedroom",
    category: "Short Film",
    year: "2026",
    url: "https://www.instagram.com/p/DbidhtIghcD/",
    image: "/stills/home-alone.png",
  },
  {
    title: "Burning Man",
    alt: "Cinematic still from Burning Man, a psychological short film directed by Langford K. Quarshie with a man standing over a burning fire",
    category: "Short Film",
    year: "2026",
    url: "https://www.instagram.com/p/Dakvvi9gEhL",
    image: "/stills/burning-man.png",
  },
  {
    title: "In The Night",
    alt: "Nighttime cinematic frame from In The Night, a visual postcard by filmmaker Langford K. Quarshie exploring mood, light, and atmosphere.",
    category: "Post Card",
    year: "2026",
    url: "https://www.instagram.com/p/Da8lfoHskgm/",
    image: "/stills/night.png",
  },
];

export const SITE_URL = "https://langford-film-www.vercel.app";
