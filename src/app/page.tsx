"use client";

import HeroBg from "@/components/hero-bg";
import { Nav } from "@/components/layout/nav";
import { Section } from "@/components/layout/section";
import { SpecsList } from "@/components/specs";
import { Title } from "@/components/typography/title";
import { SPEC_ROWS } from "@/constants";

export default function FilmmakerPortfolio() {
  return (
    <div>
      <HeroBg />
      <Section>
        <div>
          <Title>
            LANGFORD K. <br /> QUARSHIE
          </Title>
          <h3 className="uppercase tracking-wide opacity-80">
            Director &amp; Cinematographer — Film / Music Video / Documentary
          </h3>
        </div>
        <Nav />
        <div className="w-full max-w-135 md:absolute bottom-10 left-18 mt-20">
          <SpecsList rows={SPEC_ROWS} />
        </div>
      </Section>
      <Section id="works">
        <Title underline>My Works</Title>
      </Section>
      <Section id="about">
        <Title underline>ABOUT ME</Title>
      </Section>
      <Section id="contact">
        <Title underline>HIT ME UP</Title>
      </Section>
    </div>
  );
}
