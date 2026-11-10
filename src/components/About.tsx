import BlurText from "./BlurText";
import ScrollReveal from "./ScrollReveal";
import SpecularButton from "./SpecularButton";

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
      <div className="mx-auto w-full max-w-6xl">
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

        {/* Introduction */}
        <div className="max-w-3xl">
          <ScrollReveal
            duration={1.2}
            baseOpacity={0}
            enableBlur
            baseRotation={3}
            blurStrength={4}
            textClassName="text-lg leading-relaxed text-white/70 sm:text-xl"
          >
            I'm a Computer Science student who enjoys building interactive web
            applications, exploring new technologies, and creating clean,
            user-friendly experiences.
          </ScrollReveal>
        </div>

        {/* Tech Stack */}
        <div className="mt-12">
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
                tintOpacity={0.08}
                textColor="#EDE9FE"
                lineColor="#A78BFA"
                baseColor="#211B35"
                intensity={1}
                idleIntensity={0.35}
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
    </section>
  );
}

export default About;
