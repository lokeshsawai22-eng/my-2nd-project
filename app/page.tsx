import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { contact, site } from "@/content/site";

export default function Home() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    email: contact.email,
    url: site.url,
    address: { "@type": "PostalAddress", addressLocality: "Wardha", addressRegion: "Maharashtra", addressCountry: "IN" },
    alumniOf: "Bajaj College of Science, Wardha",
  };

  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
    </>
  );
}
