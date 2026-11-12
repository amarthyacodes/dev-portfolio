import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import GradientWaves from "./components/GradientWaves";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none">
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
          opacity={0.7}
          grain={0.2}
          quality="medium"
          intro
          parallaxStrength={0.5}
          mouseStrength={0.6}
          paused={false}
        />
      </div>

      <Navbar />

      <Hero />

      <About />

      <Projects />

      <Contact />
    </>
  );
}

export default App;
