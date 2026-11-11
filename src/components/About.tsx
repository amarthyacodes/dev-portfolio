import TechText from "./TechText";
import { useRef } from "react";
import VariableProximity from "./VariableProximity";
import TextType from "./TextType";
import OptionWheel from "./OptionWheel";

function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="about"
      className="relative z-10 flex min-h-screen w-full items-center px-6 py-28 sm:px-10 lg:px-20"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-16">
          <TechText
            text="A little bit about me."
            fontWeight={600}
            fontSize={72}
            reveal="letter"
            dashLength={4}
            dashGap={2}
            specks={15}
            intro="none"
            introDuration={2}
            clickKick
            guides={false}
            fontFamily=""
            letterSpacing={-0.05}
            accentColor="white"
            reach={200}
            softness={0.7}
            lineStyle="dashed"
            strokeWidth={1.5}
            speed={1}
            bounce={0.4}
            selection
            labels
            color="white"
            align="left"
            draggable
            sweep
          />
        </div>

        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="flex flex-col items-start">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">
              The person behind the code
            </p>

            <div ref={containerRef} className="relative w-full max-w-xl">
              <VariableProximity
                label="I'm Amarthya, a Computer Science student and developer who enjoys turning ideas into things people can actually use. I love exploring web technologies, experimenting with new ideas, and learning by building. When I'm away from the keyboard, I'm probably watching anime, listening to music, or figuring out what to build next. Always curious, always building, and always learning."
                className="variable-proximity-demo text-lg leading-8 text-white/75 sm:text-xl sm:leading-9"
                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                toFontVariationSettings="'wght' 650, 'opsz' 24"
                containerRef={containerRef}
                radius={80}
                falloff="linear"
                smoothing={0.1}
                scale={1}
                lift={0}
                idleWave={false}
                fontSize={18}
              />
            </div>
          </div>

          <div className="flex min-w-0 flex-col items-center text-center">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">
              My toolkit
            </p>

            <div className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              <TextType
                text={["I code with"]}
                typingSpeed={75}
                pauseDuration={1500}
                deletingSpeed={50}
                deleteMode="backspace"
                typeEffect="none"
                mistakes={0}
                cursorStyle="underscore"
                cursorGlide
                showCursor
                cursorColor="#C4B5FD"
                prefixColor="currentColor"
                cursorBlinkDuration={0.5}
                cursorCharacter="_"
                prefix=""
              />
            </div>

            <div className="relative mt-8 h-[340px] w-full max-w-[420px]">
              <OptionWheel
                className="h-full w-full"
                items={["HTML", "CSS", "JavaScript", "React", "C++", "Node.js"]}
                defaultSelected={2}
                textColor="#a6a6a6"
                activeColor="#C4B5FD"
                side="left"
                fontSize={2.5}
                spacing={1.4}
                curve={1}
                tilt={6}
                blur={2}
                fade={0.25}
                smoothing={200}
                inset={80}
                loop={false}
                draggable
                soundUrl="/assets/sounds/click-soft.mp3"
                soundVolume={0.5}
                onChange={(index, item) => console.log(index, item)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
