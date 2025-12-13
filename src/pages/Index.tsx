import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { MissionVision } from "@/components/MissionVision";
import { Projects } from "@/components/Projects";
import { Team } from "@/components/Team";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <div id="home">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <MissionVision />
        <div id="projects">
          <Projects />
        </div>
        <div id="team">
          <Team />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;