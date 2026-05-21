import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects/Projects";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function ConstrutoraEstilosPortfolio() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 selection:bg-[#008ece] selection:text-white antialiased">
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Clients />
      <Contact />
      <Footer />
    </main>
  );
}
