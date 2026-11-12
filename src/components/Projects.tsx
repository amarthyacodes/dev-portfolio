import TiltedCard, { TiltedCardLayer } from "./TiltedCard";
import TechText from "./TechText";
import animeTracker from "../assets/anime-tracker.png";
import subNest from "../assets/subnest.webp";

function Projects() {
  return (
    <section
      id="projects"
      className="relative z-10 min-h-screen w-full px-6 py-24 sm:px-10 lg:px-20"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-12">
          <TechText
            text="My projects."
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 justify-items-center">
          {/* Anime Tracker */}
          <TiltedCard
            imageSrc={animeTracker}
            altText="Anime Tracker website preview"
            captionText="Anime Tracker"
            containerHeight="420px"
            containerWidth="420px"
            imageHeight="420px"
            imageWidth="420px"
            rotateAmplitude={12}
            scaleOnHover={1.05}
            glare={0.5}
            shadow={0.5}
            backContent={
              <div
                style={{
                  height: "100%",
                  padding: "30px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "17px",
                  color: "white",
                  background:
                    "linear-gradient(145deg, #280d81 5%, #261661 55%, #020510 100%)",
                  border: "1px solid rgba(196,181,253,0.2)",
                  borderRadius: "12px",
                  boxSizing: "border-box",
                }}
              >
                <h2 style={{ fontSize: "30px", fontWeight: 700 }}>
                  Anime Tracker
                </h2>

                <p style={{ fontSize: "15px", color: "#C4B5FD" }}>
                  A personal anime tracking application.
                </p>

                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.7,
                    color: "#E9E3FF",
                  }}
                >
                  Search anime, explore details, and keep track of your
                  watchlist with a clean and responsive interface.
                </p>

                <div>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#A78BFA",
                      marginBottom: 9,
                    }}
                  >
                    TECH STACK
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {["React", "JavaScript", "CSS", "AniList API"].map(
                      (tech) => (
                        <span
                          key={tech}
                          style={{
                            fontSize: "13px",
                            padding: "7px 12px",
                            borderRadius: "20px",
                            background: "rgba(139,92,246,0.12)",
                            border: "1px solid rgba(196,181,253,0.35)",
                            color: "#EDE9FE",
                          }}
                        >
                          {tech}
                        </span>
                      ),
                    )}
                  </div>
                </div>

                <div style={{ display: "flex", gap: "22px", marginTop: 4 }}>
                  <a
                    href="https://github.com/amarthyacodes/Anime-tracker-2.0"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "#C4B5FD", fontSize: "15px" }}
                  >
                    GitHub ↗
                  </a>

                  <a
                    href="https://anime-tracker-2-0.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "#C4B5FD", fontSize: "15px" }}
                  >
                    Live Demo ↗
                  </a>
                </div>
              </div>
            }
          >
            <TiltedCardLayer depth={30}>
              <h3
                style={{
                  position: "absolute",
                  left: 24,
                  bottom: 20,
                  color: "#FFFFFF",
                  fontSize: 35,
                  fontWeight: 800,
                  letterSpacing: "-1.5px",
                  textShadow: `
        0 2px 4px rgba(0,0,0,0.9),
        0 4px 14px rgba(0,0,0,0.8),
        0 0 25px rgba(139,92,246,0.5)
      `,
                }}
              >
                Anime Tracker
              </h3>
            </TiltedCardLayer>
          </TiltedCard>

          {/* SubNest */}
          <TiltedCard
            imageSrc={subNest}
            altText="subnest susbcriptions"
            captionText="SubNest"
            containerHeight="420px"
            containerWidth="420px"
            imageHeight="420px"
            imageWidth="420px"
            rotateAmplitude={12}
            scaleOnHover={1.05}
            glare={0.5}
            shadow={0.5}
            backContent={
              <div
                style={{
                  height: "100%",
                  padding: "30px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "17px",
                  color: "white",
                  background:
                    "linear-gradient(145deg, #280d81 5%, #261661 55%, #020510 100%)",
                  borderRadius: "12px",
                }}
              >
                <span
                  style={{
                    color: "#C4B5FD",
                    fontSize: "13px",
                    letterSpacing: "2px",
                    fontWeight: 600,
                  }}
                >
                  IN DEVELOPMENT
                </span>

                <h2 style={{ fontSize: "34px", fontWeight: 700 }}>SubNest</h2>

                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.7,
                    color: "#D1D5DB",
                  }}
                >
                  One place to manage all your subscriptions. Track recurring
                  payments, monitor expenses, and stay in control of your
                  monthly spending.
                </p>

                <div>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#A78BFA",
                      marginBottom: 9,
                    }}
                  >
                    PLANNED TECH STACK
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {["React", "Node.js", "PostgreSQL"].map((tech) => (
                      <span
                        key={tech}
                        style={{
                          fontSize: "13px",
                          padding: "7px 12px",
                          borderRadius: "20px",
                          background: "rgba(139,92,246,0.12)",
                          border: "1px solid rgba(196,181,253,0.35)",
                          color: "#EDE9FE",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <p style={{ fontSize: "13px", color: "#A78BFA" }}>
                  Coming soon · Currently planning
                </p>
              </div>
            }
          >
            <TiltedCardLayer depth={30}>
              <h2
                style={{
                  position: "absolute",
                  bottom: 20,
                  left: 24,
                  fontSize: 35,
                  fontWeight: 800,
                  letterSpacing: "-1.5px",
                  color: "#FFFFFF",
                  textShadow: `
        0 2px 4px rgba(0,0,0,0.9),
        0 4px 14px rgba(0,0,0,0.8),
        0 0 25px rgba(139,92,246,0.5)
      `,
                }}
              >
                SubNest
              </h2>
            </TiltedCardLayer>
          </TiltedCard>
        </div>
      </div>
    </section>
  );
}

export default Projects;
