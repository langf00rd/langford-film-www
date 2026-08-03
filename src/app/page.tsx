"use client";

import HeroBg from "@/components/hero-bg";
import { Nav } from "@/components/layout/nav";
import { Section } from "@/components/layout/section";
import { SpecsList } from "@/components/specs";
import { Title } from "@/components/typography/title";
import {
  EMAIL,
  INSTAGRAM_LINK,
  PROJECTS,
  SPEC_ROWS,
  YOUTUBE_LINK,
} from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function FilmmakerPortfolio() {
  return (
    <div>
      <HeroBg />
      <Section className="flex flex-col justify-between">
        <div>
          <Title>
            LANGFORD K. <br /> QUARSHIE
          </Title>
          <h3 className="uppercase tracking-wide opacity-80">
            Film Director — Cinematographer — Visual Storyteller
          </h3>
        </div>
        <Nav />
        <div className="space-y-10 md:space-y-0">
          <div className="w-full max-w-135 md:absolute bottom-10 right-38 mt-20">
            <SpecsList rows={SPEC_ROWS} />
          </div>
          <p className="max-w-2xl leading-[1.7] md:text-xl text-white/70 md:absolute bottom-10 left-18">
            I create stories that explore the emotional, the unexpected, and
            everything in between — from intimate human moments to worlds that
            exist beyond reality.
          </p>
        </div>
      </Section>

      <Section id="works">
        <Title underline>SELECTED WORKS</Title>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {PROJECTS.map((item) => (
            <Link
              href={item.url}
              target="_blank"
              key={item.title}
              className="block border border-white/20 p-3 backdrop-blur-sm transition hover:border-white"
            >
              <article>
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover aspect-video"
                  width={1920}
                  height={1080}
                />
                <div className="mt-4 flex items-center justify-between">
                  <h3 className="text-xl flex items-center gap-2 uppercase">
                    <span className="h-5 block bg-primary w-1" />
                    {item.title}
                  </h3>
                  <p className="opacity-60">{item.category}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </Section>

      <Section id="about">
        <div>
          <Title underline>ABOUT ME</Title>
          <div className="mt-12 max-w-3xl space-y-8 text-lg leading-relaxed text-white/80">
            <p>
              I&apos;m Langford K. Quarshie, a filmmaker and cinematographer
              fascinated by the relationship between reality, emotion, and
              imagination.
            </p>

            <p>
              My approach is rooted in visual storytelling — using composition,
              movement, light, and sound to transform ordinary moments into
              cinematic experiences.
            </p>

            <p>
              From music videos and documentaries to branded films and short
              narratives, I collaborate with artists, brands, and individuals to
              create work that feels intentional, honest, and unforgettable.
            </p>
          </div>
        </div>
      </Section>

      <Section id="contact">
        <Title underline>HIT ME UP!</Title>

        <div className="mt-12 max-w-2xl">
          <p className="text-xl text-white/70 leading-relaxed">
            Have a story, idea, or vision you want to bring to life? I&apos;m
            available for film direction, cinematography, music videos,
            documentaries, and cinematic brand projects.
          </p>
          <div className="mt-12 flex flex-col gap-4">
            <Link
              href={`mailto:${EMAIL}`}
              className="text-3xl font-display uppercase hover:opacity-70"
            >
              {EMAIL}
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
