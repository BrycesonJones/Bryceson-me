import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-100 px-6 py-16 text-zinc-900">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-12">
        <section className="space-y-5">
          <div className="flex items-center gap-4">
            <div className="relative h-24 w-24 shrink-0">
              <Image
                src="/profile.png"
                alt="Bryceson"
                fill
                priority
                sizes="96px"
                className="rounded-full object-cover"
              />
              <span className="absolute bottom-1 right-1 h-4 w-4">
                <span className="absolute inset-0 animate-ping rounded-full bg-green-800 opacity-75" />
                <span className="relative block h-4 w-4 rounded-full border-2 border-zinc-100 bg-green-800" />
              </span>
            </div>
            <div className="space-y-1">
              <h1 className="text-3xl font-bold">Bryceson Jones</h1>
              <p className="text-xl leading-relaxed">
                I build Web3 products in public. I share experiments, what I am
                learning, and what actually works.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-center text-5xl font-extrabold tracking-tight text-zinc-900">
            PORTFOLIO
          </h2>
          <div className="space-y-3">
            <a
              href="https://communitypool.online/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl bg-zinc-200/70 px-5 py-4 transition-all duration-200 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
            >
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl shadow-sm">
                <Image
                  src="/communitypool.png"
                  alt="CommunityPool logo"
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <div className="flex-1 text-center">
                <p className="text-lg font-bold text-zinc-900">CommunityPool</p>
                <p className="text-xs font-medium uppercase tracking-wide text-zinc-600">
                  Fund any outing, project, or event using digital gold
                </p>
              </div>
            </a>

            <a
              href="https://alyoko.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl bg-zinc-200/70 px-5 py-4 transition-all duration-200 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
            >
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-white shadow-sm">
                <Image
                  src="/lyoko.png"
                  alt="Lyoko logo"
                  fill
                  sizes="56px"
                  className="object-contain p-1"
                />
              </div>
              <div className="flex-1 text-center">
                <p className="text-lg font-bold text-zinc-900">Lyoko</p>
                <p className="text-xs font-medium uppercase tracking-wide text-zinc-600">
                  Grow Using AI Agents
                </p>
              </div>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-4 text-base text-zinc-800">
            <p>I post regularly on these platforms</p>
            <div className="group flex items-center">
              <a
                href="https://www.youtube.com/@SystemsofSimulacra"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="relative z-40 transition-all duration-300 ease-out hover:z-50 hover:scale-110"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-10 w-10 drop-shadow-sm"
                  aria-hidden
                >
                  <rect width="24" height="24" rx="6" fill="#FF0000" />
                  <path d="M10 8.2 16 12l-6 3.8z" fill="white" />
                </svg>
              </a>
              <a
                href="https://x.com/brycesonjx"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="relative z-30 -ml-3 transition-all duration-300 ease-out hover:z-50 hover:scale-110 group-hover:ml-1"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-10 w-10 drop-shadow-sm"
                  aria-hidden
                >
                  <rect width="24" height="24" rx="6" fill="#000000" />
                  <path
                    d="M7.5 7h2.4l2.6 3.6L15.4 7h1.6l-3.4 4.5L17.2 17h-2.4l-2.8-3.9L8.6 17H7l3.6-4.7L7.5 7Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/bryceson.simulacra/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="relative z-20 -ml-3 transition-all duration-300 ease-out hover:z-50 hover:scale-110 group-hover:ml-1"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-10 w-10 drop-shadow-sm"
                  aria-hidden
                >
                  <defs>
                    <linearGradient
                      id="ig-grad"
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#feda75" />
                      <stop offset="35%" stopColor="#fa7e1e" />
                      <stop offset="65%" stopColor="#d62976" />
                      <stop offset="100%" stopColor="#4f5bd5" />
                    </linearGradient>
                  </defs>
                  <rect width="24" height="24" rx="6" fill="url(#ig-grad)" />
                  <rect
                    x="6.5"
                    y="6.5"
                    width="11"
                    height="11"
                    rx="3.2"
                    fill="none"
                    stroke="white"
                    strokeWidth="1.4"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="2.6"
                    fill="none"
                    stroke="white"
                    strokeWidth="1.4"
                  />
                  <circle cx="15.6" cy="8.4" r="0.9" fill="white" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/brycesonjones/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="relative z-10 -ml-3 transition-all duration-300 ease-out hover:z-50 hover:scale-110 group-hover:ml-1"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-10 w-10 drop-shadow-sm"
                  aria-hidden
                >
                  <rect width="24" height="24" rx="6" fill="#0A66C2" />
                  <path
                    d="M7.6 9.6h2.2v7.4H7.6V9.6Zm1.1-3.2a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6Zm3 3.2H14v1c.4-.7 1.3-1.2 2.4-1.2 2 0 2.4 1.3 2.4 3v4.6h-2.2v-4c0-1 0-2.2-1.4-2.2s-1.6 1-1.6 2.1V17H11.7V9.6Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>

          <p className="pt-2 text-center text-lg text-zinc-800">
            Curious about my tech stack?{" "}
            <Link
              href="/tools"
              className="font-medium text-blue-600 underline-offset-4 hover:underline"
            >
              Click here.
            </Link>
          </p>
        </section>

        <section className="space-y-2 pt-8 text-center text-2xl">
          <p className="font-bold text-blue-600">...</p>
          <p className="text-xl">
            Building in public at{" "}
            <a
              href="#"
              className="font-semibold text-blue-700 underline-offset-4 hover:underline"
            >
              bryceson.me
            </a>
          </p>
          <p className="text-xl">
            DM me on X{" "}
            <a
              href="#"
              className="font-semibold text-blue-700 underline-offset-4 hover:underline"
            >
              @bryceson
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
