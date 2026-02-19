import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Courses from "@/components/sections/Courses";
import Faculty from "@/components/sections/Faculty";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Courses />
      <Faculty />
      <Gallery />
      <Testimonials />
      <Contact />
    </>
  );
}
