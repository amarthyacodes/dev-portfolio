import PillNav from "./PillNav";
//import logo from './logo.svg';
function Navbar() {
  return (
    <PillNav
      //logo={logo}
      logoAlt="Company"
      items={[
        { label: "Home", href: "/" },
        { label: "About", href: "/About" },
        { label: "Projects", href: "/Projects" },
        { label: "Contact", href: "/Contact" },
      ]}
      activeHref="/"
      itemStyle="pill"
      hoverEffect="fill"
      indicator="dot"
      layout="split"
      surface="glass"
      size="md"
      bounce={0.3}
      stretch={0.5}
      collapse="auto"
      intro
    />
  );
}

export default Navbar;
