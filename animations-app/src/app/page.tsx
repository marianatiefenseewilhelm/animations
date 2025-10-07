import { AnimatedList } from "@/components/magicui/animated-list";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { GridPattern } from "@/components/magicui/grid-pattern";
import { MagicCard } from "@/components/magicui/magic-card";
import { Button } from "@/components/ui/button";
import { BlocksIcon, CompassIcon, SparklesIcon } from "lucide-react";

const interactiveHighlights = [
  {
    title: "Effortless motion",
    description:
      "Hover-aware cards, animated text, and gradients are ready to drop into any layout without extra setup.",
    Icon: SparklesIcon,
    gradientFrom: "#7C3AED",
    gradientTo: "#22D3EE",
  },
  {
    title: "Composable surfaces",
    description:
      "Blend Magic UI effects with your existing design system using shared tokens, utilities, and shadcn/ui primitives.",
    Icon: BlocksIcon,
    gradientFrom: "#2563EB",
    gradientTo: "#10B981",
  },
  {
    title: "Production ready",
    description:
      "Follow the documentation to wire up motion safely with TypeScript support, theming, and accessibility baked in.",
    Icon: CompassIcon,
    gradientFrom: "#F97316",
    gradientTo: "#FACC15",
  },
] as const;

const highlights = [
  {
    name: "Drop-in animations",
    description:
      "Install Magic UI components in seconds and compose them with your existing design system.",
    Icon: SparklesIcon,
    href: "https://magicui.design/docs/components",
    cta: "Browse components",
    className: "lg:col-span-2",
    background: (
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 rounded-[inherit] bg-gradient-to-br from-primary/20 via-transparent to-primary/10 opacity-0 transition-all duration-500 group-hover:opacity-100" />
        <div className="absolute -right-24 top-12 h-48 w-48 rounded-full bg-primary/20 blur-3xl transition-all duration-500 group-hover:-translate-y-6" />
      </div>
    ),
  },
  {
    name: "Composable building blocks",
    description:
      "Every effect ships as a React component so you can mix, match, and build delightful interfaces with ease.",
    Icon: BlocksIcon,
    href: "https://magicui.design/showcase",
    cta: "See live examples",
    className: "lg:col-span-1",
    background: (
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-y-6 left-6 right-6 rounded-3xl border border-dashed border-primary/40" />
        <div className="absolute inset-x-10 bottom-6 h-20 rounded-3xl bg-gradient-to-t from-muted/60 via-transparent" />
      </div>
    ),
  },
  {
    name: "Guided installation",
    description:
      "Follow the step-by-step docs to configure Tailwind CSS, aliases, and utilities for a smooth developer experience.",
    Icon: CompassIcon,
    href: "https://magicui.design/docs/installation",
    cta: "Read the docs",
    className: "lg:col-span-2",
    background: (
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_top,hsl(var(--secondary)/0.25),transparent_55%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 rounded-t-full bg-gradient-to-t from-background via-background/70" />
      </div>
    ),
  },
] as const;

const salesMessages = [
  {
    id: "sale-1",
    title: "You just made a sale!",
    description: "🎉 Nice work, that listing didn’t stay up for long!",
  },
  {
    id: "sale-2",
    title: "Another one sold!",
    description: "🙌 Looks like your hustle is paying off. Keep it going with Vendoo Go.",
  },
  {
    id: "sale-3",
    title: "Cha-ching! Your item just sold.",
    description: "🤑 That’s the sound of progress. Time to celebrate your latest sale!",
  },
] as const;

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-12 px-6 py-16 sm:py-20 lg:py-24">
      <section className="relative overflow-hidden rounded-3xl border border-border/60 bg-background/80 px-6 py-16 text-center shadow-sm sm:px-12">
        <GridPattern className="opacity-60 [mask-image:radial-gradient(circle_at_center,white,transparent_70%)]" />
        <div className="relative z-10 flex flex-col items-center gap-6">
          <AnimatedShinyText className="text-xs font-medium uppercase tracking-[0.3em]">
            Magic UI starter kit
          </AnimatedShinyText>
          <div className="flex flex-col gap-4">
            <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Build polished motion without leaving your Next.js project
            </h1>
            <p className="mx-auto max-w-2xl text-balance text-base text-muted-foreground sm:text-lg">
              This template wires up Tailwind CSS, shadcn/ui primitives, and Magic UI components so you can focus on crafting immersive user experiences.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg">
              <a href="https://magicui.design" target="_blank" rel="noreferrer">
                Explore Magic UI
              </a>
            </Button>
            <Button variant="secondary" asChild size="lg">
              <a
                href="https://magicui.design/docs/installation"
                target="_blank"
                rel="noreferrer"
              >
                Installation guide
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="grid gap-8 rounded-3xl border border-border/60 bg-background/80 p-8 shadow-sm lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col gap-4">
          <span className="inline-flex w-fit items-center justify-center rounded-full border border-border/60 bg-background/90 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
            Activity spotlight
          </span>
          <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
            Keep momentum with an animated sales feed
          </h2>
          <p className="max-w-xl text-balance text-base text-muted-foreground sm:text-lg">
            Magic UI’s animated list is perfect for showcasing real-time wins. Drop in your activity data and let subtle motion
            draw attention to what matters most.
          </p>
        </div>
        <AnimatedList items={salesMessages} className="lg:ml-auto lg:max-w-md" />
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {interactiveHighlights.map(({ title, description, Icon, gradientFrom, gradientTo }) => (
          <MagicCard
            key={title}
            className="h-full rounded-3xl"
            gradientFrom={gradientFrom}
            gradientTo={gradientTo}
          >
            <div className="relative z-10 flex h-full flex-col gap-4 p-6 text-left">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-border/60 bg-background/80">
                <Icon className="h-6 w-6 text-primary" />
              </span>
              <div className="flex flex-col gap-2">
                <h2 className="text-lg font-semibold tracking-tight text-foreground">{title}</h2>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
            </div>
          </MagicCard>
        ))}
      </section>

      <BentoGrid className="mt-4">
        {highlights.map((item) => (
          <BentoCard key={item.name} {...item} />
        ))}
      </BentoGrid>
    </main>
  );
}
