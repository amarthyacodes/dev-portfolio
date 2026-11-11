import GradientWaves from "./GradientWaves";
import SplitText from "./SplitText";

function Hero() {
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="relative z-20 flex flex-col items-center text-center">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-violet-300">
            CSE Student · Developer
          </p>

          <SplitText
            text="Hey, I'm Amarthya."
            className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl"
            effect="rise"
            splitType="chars"
            delay={50}
            duration={1.25}
            staggerFrom="start"
            trigger="view"
            hoverEffect="lift"
            loop={false}
            mask={false}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />

          <div className="mt-4">
            <SplitText
              text="I build things for the web."
              className="text-xl font-medium tracking-wide text-white/80 sm:text-2xl md:text-3xl"
              effect="rise"
              splitType="words"
              delay={70}
              duration={1}
              staggerFrom="start"
              trigger="view"
              hoverEffect="lift"
              loop={false}
              mask={false}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
            Exploring frontend, backend and everything in between.
          </p>
        </div>
      </div>
    </>
  );
}

export default Hero;
