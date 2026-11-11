import PillNav from "./PillNav";

function Navbar() {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <PillNav
        items={[
          { label: "Home", href: "#home" },
          { label: "About", href: "#about" },
          { label: "Projects", href: "#projects" },
          { label: "Contact", href: "#contact" },
        ]}
        activeHref="#home"
        itemStyle="pill"
        hoverEffect="fill"
        indicator="dot"
        layout="joined"
        surface="glass"
        size="md"
        bounce={0.1}
        stretch={0.1}
        collapse="auto"
        intro
      />
    </div>
  );
}

export default Navbar;
