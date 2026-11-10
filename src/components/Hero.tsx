import GradientWaves from "./GradientWaves";
import SplitText from "./SplitText";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-5"
    >
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <GradientWaves
          horizonColor="#5227FF"
          waveColor="#8B5CF6"
          crestColor="#C4B5FD"
          speed={0.4}
          amplitude={2.5}
          relief={1}
          lightAngle={120}
          mouseInteraction
          swellOnClick
          lightMode={false}
          waveScale={0.6}
          waveRatio={0.9}
          swell={35}
          turbulence={20}
          tilt={64}
          zoom={1}
          height={5.5}
          fogDepth={15}
          sheen={0}
          brightness={1}
          opacity={1}
          grain={0.2}
          quality="medium"
          intro
          parallaxStrength={0.5}
          mouseStrength={0.6}
          paused={false}
        />
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center text-center">
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
    </section>
  );
}

export default Hero;
