import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

type Tool = {
  name: string;
  href: string;
  description: string;
  image: string;
};

const tools: Tool[] = [
  {
    name: "Cursor",
    href: "https://cursor.com/",
    description: "Code Editing",
    image: "/tools/Cursor.png",
  },
  {
    name: "Claude Code",
    href: "https://www.claude.com/product/claude-code",
    description: "Coding Agent",
    image: "/tools/Claude.png",
  },
  {
    name: "React",
    href: "https://react.dev/",
    description: "A framework I use for web development",
    image: "/tools/React.png",
  },
  {
    name: "Vercel",
    href: "https://vercel.com/",
    description: "A service I use to host frontend websites",
    image: "/tools/Vercel.png",
  },
  {
    name: "Supabase",
    href: "https://supabase.com/",
    description: "A Postgres backend I use",
    image: "/tools/Supabase.png",
  },
  {
    name: "PostHog",
    href: "https://posthog.com/",
    description: "A analytics platform I use",
    image: "/tools/Posthog.png",
  },
  {
    name: "OpenRouter",
    href: "https://openrouter.ai/",
    description: "Switch between LLMs",
    image: "/tools/OpenRouter.png",
  },
  {
    name: "Stripe",
    href: "https://stripe.com/",
    description: "A service I use for payments",
    image: "/tools/Stripe.png",
  },
  {
    name: "Resend",
    href: "https://resend.com/",
    description: "A service for email dev work",
    image: "/tools/Resend.png",
  },
];

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-zinc-100 px-6 py-12 text-zinc-900">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-base text-zinc-700 transition-colors hover:text-zinc-900"
        >
          <span aria-hidden>←</span> Back to home
        </Link>

        <div className="relative h-24 w-24 shrink-0">
          <Image
            src="/profile.png"
            alt="Bryceson"
            fill
            sizes="96px"
            className="rounded-full object-cover"
          />
        </div>

        <p
          className={`${inter.className} text-2xl font-normal leading-snug tracking-tight text-[#1a1a1a]`}
        >
          Here are the tools and services I use.
        </p>

        <section className="space-y-8 pt-2">
          <h2
            className={`${inter.className} text-2xl font-normal leading-snug tracking-tight text-[#1a1a1a]`}
          >
            Tools I use
          </h2>

          <ul className="space-y-8">
            {tools.map((tool) => (
              <li key={tool.name} className="flex gap-4">
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-white">
                  <Image
                    src={tool.image}
                    alt={`${tool.name} logo`}
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <a
                    href={tool.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-medium text-blue-600 hover:underline"
                  >
                    {tool.name}
                  </a>
                  <p className="flex items-start gap-2 text-zinc-600">
                    <span className="text-zinc-400" aria-hidden>
                      ↳
                    </span>
                    {tool.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
