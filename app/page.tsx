import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Emotional from "@/components/Emotional";
import Story from "@/components/Story";
import Benefits from "@/components/Benefits";
import Learn from "@/components/Learn";
import AddOn from "@/components/AddOn";
import Faq from "@/components/Faq";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import StickyCta from "@/components/StickyCta";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Emotional />
        <Story />
        <Benefits />
        <Learn />
        <AddOn />
        <Faq />
        <CtaSection />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
