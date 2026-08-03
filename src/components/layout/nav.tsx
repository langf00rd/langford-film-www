import { NAV_LINKS } from "@/constants";
import Link from "next/link";

export function Nav() {
  return (
    <div className="fixed px-5 z-10 md:px-0 right-0 bg-white flex md:flex-col justify-between md:py-18 gap-8 bottom-0 md:right-0 md:h-screen text-right">
      {NAV_LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="md:[writing-mode:vertical-rl] hover:text-primary text-black transition-colors md:text-[44px] uppercase tracking-wide"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
