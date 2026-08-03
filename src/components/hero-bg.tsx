"use client";

import { STILLS } from "@/constants";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroBg() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % STILLS.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {STILLS.map((img, i) => (
        <Image
          key={i}
          src={img.src}
          alt={img.alt}
          fill
          priority={i === 0}
          className="absolute inset-0 object-cover transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        />
      ))}
    </div>
  );
}
