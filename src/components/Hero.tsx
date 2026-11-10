import GradientWaves from "./GradientWaves";
import SplitText from "./SplitText";

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

function Hero() {
  return (
    <div className="relative h-screen w-full flex items-center justify-center">
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
      <div className="relative z-10">
        <SplitText
          text="Hey, I'm Amarthya."
          className="text-7xl font-semibold text-center text-white"
          effect="rise"
          splitType="chars"
          delay={50}
          duration={1.25}
          staggerFrom="start"
          trigger="view"
          hoverEffect="lift"
          loop={false}
          loopDelay={1.5}
          mask={false}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />
        <p className="mt-4 text-xl font-medium tracking-wide text-white/80 text-center sm:text-2xl">
          I build things for the web.
        </p>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-white/60 text center mx-auto">
          CSE student exploring frontend, backend, and everything in between. I
          enjoy turning ideas into functional, user-friendly experiences.
        </p>
      </div>
    </div>
  );
}

export default Hero;
