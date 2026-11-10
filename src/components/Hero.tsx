import GradientWaves from "./GradientWaves";
import SplitText from "./SplitText";

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

function Hero() {
  return (
    <div style={{ width: "100%", height: "100vh", position: "relative" }}>
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
  );
}

export default Hero;
