import { NAV_LINKS } from "@/constants";
import Link from "next/link";

export function Nav() {
  return (
    <div className="fixed md:w-[70px] items-center z-10 right-0 bg-white flex md:flex-col justify-between px-4 md:px-0 md:py-18 gap-8 bottom-0 md:right-0 md:h-screen text-right">
      {NAV_LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="md:[writing-mode:vertical-rl] hover:text-primary text-black transition-colors md:text-[30px] lg:text-[44px] uppercase tracking-wide"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
