import BlurText from "./BlurText";
import ScrollReveal from "./ScrollReveal";
import SpecularButton from "./SpecularButton";
import Aurora from "./Aurora";
import SpotlightCard from "./SpotlightCard";

function About() {
  const techStack = [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "PostgreSQL",
  ];

  return (
    <section
      id="about"
      className="relative flex min-h-[75vh] items-center overflow-hidden bg-[#080B18] px-6 py-24"
    >
      {/* Aurora background */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-15">
        <Aurora
          colorStops={["#5227FF", "#8B5CF6", "#A78BFA"]}
          amplitude={0.2}
          blend={0.2}
          speed={0.3}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* Heading */}
        <div className="mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-violet-400">
            Get to know me
          </p>

          <BlurText
            text="A little about me."
            delay={100}
            animateBy="words"
            direction="top"
            className="text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl"
          />
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Introduction */}
          <div>
            <ScrollReveal
              mode="enter"
              duration={0.8}
              baseOpacity={0}
              enableBlur
              baseRotation={0}
              blurStrength={4}
              textClassName="text-lg leading-relaxed text-white/70 sm:text-xl"
            >
              I'm a Computer Science student who enjoys building interactive web
              applications, exploring new technologies, and creating clean,
              user-friendly experiences.
            </ScrollReveal>

            {/* Tech stack */}
            <div className="mt-10">
              <h3 className="mb-5 text-sm font-medium uppercase tracking-widest text-white/50">
                Currently exploring
              </h3>

              <div className="flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <SpecularButton
                    key={tech}
                    size="md"
                    radius={18}
                    tint="#A78BFA"
                    tintOpacity={0.12}
                    textColor="#EDE9FE"
                    lineColor="#8B5CF6"
                    baseColor="#211B35"
                    intensity={1}
                    idleIntensity={0.4}
                    shineSize={10}
                    shineFade={34}
                    thickness={1.2}
                    glow={1}
                    followMouse
                    proximity={250}
                  >
                    {tech}
                  </SpecularButton>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
