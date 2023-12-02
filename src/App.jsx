import "./app.scss"
import { Navbar } from "./components/navbar/navbar";
import { Hero } from "./components/hero/hero";
import { Parallax } from "./components/parallax/Parallax";
import { Skills } from "./components/services.jsx/Skills";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { Contact } from "./components/contact/Contact";
import { Cursor } from "./components/cursor/Cursor";
const App = () => {
  return <div>
    <Cursor />
    <section id="Homepage">
      <Navbar />
      <Hero />
    </section>
    <section id="Skills"><Parallax type="skills" /></section>
    <section><Skills /></section>
    <section id="Portfolio"><Parallax type="portfolio" /></section>
    <Portfolio />
    <section id="Contact">
      <Contact />
    </section>

  </div>;
};

export default App;
