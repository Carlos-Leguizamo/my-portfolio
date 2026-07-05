"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { useLocale } from "@/components/LocaleProvider";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SceneFallback } from "@/components/three/SceneFallback";
import { useMediaQuery } from "@/lib/useMediaQuery";

const HeroScene = dynamic(
  () => import("@/components/three/HeroScene").then((mod) => mod.HeroScene),
  { ssr: false, loading: () => <SceneFallback /> }
);

export function Hero() {
  const canRender3D = useMediaQuery("(min-width: 768px)");
  const { t } = useLocale();

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {siteConfig.available && (
            <Badge dot className="mb-6">
              {t.hero.available}
            </Badge>
          )}

          <p className="text-lg text-foreground/70">{t.hero.greeting}</p>
          <h1 className="mt-1 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {siteConfig.name}
          </h1>
          <p className="mt-3 text-xl font-medium text-accent">{t.hero.role}</p>
          <p className="mt-5 max-w-md text-base leading-relaxed text-foreground/70 text-justify">
            {t.hero.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button as="a" href="#proyectos" variant="primary">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              {t.hero.ctaProjects}
            </Button>
            <Button as="a" href="#contacto" variant="secondary">
              {t.hero.ctaContact}
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="relative h-72 sm:h-96 md:h-[28rem]"
        >
          {canRender3D ? <HeroScene /> : <SceneFallback />}
        </motion.div>
      </div>

      <a
        href="#sobre-mi"
        aria-label={t.hero.scrollHint}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-foreground/50 transition-colors hover:text-accent sm:block"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" aria-hidden="true" />
      </a>
    </section>
  );
}
