import AnimatedContent from "./AnimatedContent";
import {
  ArrowUpRight,
  ExternalLink,
  Code2,
  Search,
  Bookmark,
} from "lucide-react";

function Projects() {
  const technologies = [
    "React",
    "JavaScript",
    "CSS",
    "GraphQL",
    "LocalStorage",
  ];

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#080B18] px-6 py-28 sm:py-36"
    >
      {/* Subtle background lighting */}
      <div className="pointer-events-none absolute -right-40 top-40 h-96 w-96 rounded-full bg-violet-700/[0.08] blur-[130px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Section heading */}
        <AnimatedContent
          distance={30}
          direction="vertical"
          reverse={false}
          duration={0.8}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          threshold={0.2}
          delay={0}
        >
          <div className="mb-20">
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-violet-400">
              01 / Selected work
            </p>

            <h2 className="max-w-3xl text-5xl font-semibold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl">
              Built with
              <span className="text-violet-400"> curiosity.</span>
            </h2>

            <p className="mt-6 max-w-lg text-base leading-8 text-white/50">
              A look at what I've been building, learning and experimenting
              with.
            </p>
          </div>
        </AnimatedContent>

        {/* Project showcase */}
        <AnimatedContent
          distance={45}
          direction="vertical"
          reverse={false}
          duration={0.9}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          threshold={0.1}
          delay={0.15}
        >
          <article className="group">
            {/* Project image */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#151126]">
              <div className="absolute left-5 top-5 z-10 flex items-center gap-2 rounded-full border border-white/15 bg-[#080B18]/80 px-3 py-2 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/80">
                  Personal project
                </span>
              </div>

              <img
                src="/projects/anime-tracker.png"
                alt="Anime Tracker application"
                className="aspect-[16/9] w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.025]"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080B18]/30 via-transparent to-transparent" />
            </div>

            {/* Project information */}
            <div className="grid gap-12 py-10 md:grid-cols-[1.3fr_0.7fr] md:py-14">
              {/* Left: title and description */}
              <div>
                <div className="mb-5 flex items-center gap-4">
                  <span className="text-sm font-medium text-violet-400">
                    01
                  </span>
                  <span className="h-px w-12 bg-violet-400/40" />
                  <span className="text-xs uppercase tracking-[0.2em] text-white/35">
                    Web application
                  </span>
                </div>

                <h3 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  Anime Tracker
                  <span className="text-violet-400">.</span>
                </h3>

                <p className="mt-6 max-w-xl text-base leading-8 text-white/55">
                  A personal anime discovery and tracking application. Search
                  for anime, explore titles, and manage your own watchlist
                  through a responsive interface.
                </p>

                {/* Project links */}
                <div className="mt-9 flex flex-wrap items-center gap-6">
                  <a
                    href="https://github.com/amarthyacodes"
                    target="_blank"
                    rel="noreferrer"
                    className="group/link inline-flex items-center gap-2 border-b border-violet-400/50 pb-2 text-sm font-medium text-white transition-colors hover:border-violet-300 hover:text-violet-300"
                  >
                    <Code2 size={17} />
                    View source
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1"
                    />
                  </a>

                  <a
                    href="https://YOUR-ANIME-TRACKER-URL.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                    className="group/link inline-flex items-center gap-2 border-b border-white/20 pb-2 text-sm font-medium text-white/65 transition-colors hover:border-violet-300 hover:text-violet-300"
                  >
                    Live website
                    <ExternalLink size={15} />
                  </a>
                </div>
              </div>

              {/* Right: project details */}
              <div className="space-y-9">
                {/* Features */}
                <div>
                  <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-white/35">
                    What it does
                  </p>

                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <Search
                        size={19}
                        className="mt-1 shrink-0 text-violet-400"
                      />
                      <div>
                        <h4 className="text-sm font-medium text-white">
                          Discover anime
                        </h4>
                        <p className="mt-1 text-sm leading-6 text-white/40">
                          Find titles using anime search.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Bookmark
                        size={19}
                        className="mt-1 shrink-0 text-violet-400"
                      />
                      <div>
                        <h4 className="text-sm font-medium text-white">
                          Manage your watchlist
                        </h4>
                        <p className="mt-1 text-sm leading-6 text-white/40">
                          Keep track of anime using local storage.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-white/35">
                    Technologies
                  </p>

                  <div className="flex flex-wrap gap-x-3 gap-y-2">
                    {technologies.map((tech, index) => (
                      <span
                        key={tech}
                        className="text-sm text-violet-200/75 transition-colors hover:text-white"
                      >
                        {tech}
                        {index !== technologies.length - 1 && (
                          <span className="ml-3 text-violet-500/50">/</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom divider */}
            <div className="flex items-center justify-between border-t border-white/10 pt-5">
              <span className="text-xs uppercase tracking-[0.2em] text-white/30">
                End of project 01
              </span>

              <span className="text-xs text-violet-400/70">
                More in progress
              </span>
            </div>
          </article>
        </AnimatedContent>
      </div>
    </section>
  );
}

export default Projects;
