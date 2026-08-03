"use client";

import HeroBg from "@/components/hero-bg";
import { Nav } from "@/components/layout/nav";
import { Section } from "@/components/layout/section";
import { SpecsList } from "@/components/specs";
import { Title } from "@/components/typography/title";
import { EMAIL, INSTAGRAM_LINK, SPEC_ROWS, YOUTUBE_LINK } from "@/constants";
import Link from "next/link";

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
        <Title underline>MY WORKS</Title>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Music Videos",
              description:
                "Visually driven narratives crafted for artists and labels.",
            },
            {
              title: "Commercials",
              description:
                "Brand films focused on storytelling and striking imagery.",
            },
            {
              title: "Documentaries",
              description:
                "Human-centered stories with an authentic cinematic approach.",
            },
            {
              title: "Short Films",
              description:
                "Original scripted films exploring compelling narratives.",
            },
            {
              title: "Behind the Scenes",
              description:
                "Production moments and creative process documentation.",
            },
            {
              title: "Photography",
              description: "Portrait, editorial, and cinematic still imagery.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="border border-white/20 p-6 backdrop-blur-sm transition hover:border-white"
            >
              <h3 className="font-display text-3xl uppercase">{item.title}</h3>
              <p className="mt-4 text-white/70 leading-relaxed">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="about">
        <div>
          <Title underline>ABOUT ME</Title>

          <div className="mt-12 max-w-3xl space-y-8 text-lg leading-relaxed text-white/80">
            <p>
              I&apos;m Langford K. Quarshie, a filmmaker and cinematographer
              passionate about telling stories through thoughtful composition,
              movement, and light. Every frame is designed to evoke emotion
              while serving the narrative.
            </p>

            <p>
              My work spans music videos, documentaries, branded content, and
              short films, collaborating with artists, agencies, and brands to
              create cinematic visuals that leave a lasting impression.
            </p>

            <p>
              Whether leading a production or operating the camera, I focus on
              crafting imagery that feels intentional, immersive, and timeless.
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h4 className="text-white/50 uppercase text-sm">Based</h4>
            <p className="mt-2 text-xl">Ghana</p>
          </div>

          <div>
            <h4 className="text-white/50 uppercase text-sm">Focus</h4>
            <p className="mt-2 text-xl">Narrative</p>
          </div>

          <div>
            <h4 className="text-white/50 uppercase text-sm">Genres</h4>
            <p className="mt-2 text-xl">Film · Docs</p>
          </div>

          <div>
            <h4 className="text-white/50 uppercase text-sm">Available</h4>
            <p className="mt-2 text-xl">Worldwide</p>
          </div>
        </div>
      </Section>

      <Section id="contact">
        <Title underline>HIT ME UP</Title>

        <div className="mt-12 max-w-2xl">
          <p className="text-xl text-white/70 leading-relaxed">
            Looking for a director or cinematographer for your next film,
            documentary, commercial, or music video? Let&apos;s create something
            memorable together.
          </p>

          <div className="mt-12 flex flex-col gap-4">
            <Link
              href={`mailto:${EMAIL}`}
              className="text-3xl font-display uppercase hover:opacity-70"
            >
              hello@example.com
            </Link>

            <Link
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 uppercase tracking-widest hover:text-white"
            >
              Instagram
            </Link>

            <Link
              href={YOUTUBE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 uppercase tracking-widest hover:text-white"
            >
              YouTube
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
