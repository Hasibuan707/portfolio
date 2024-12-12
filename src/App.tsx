import { Nav } from "./components/nav";
import { AboutMe } from "./components/about";
import { Skills } from "./components/skills";
import { Portfolio } from "./components/portfolio";
import { Experience } from "./components/experience";
import { Testimonial } from "./components/testimonial";
import { Contact } from "./components/contact";

export default function Page() {
  return (
    <div className="bg-gray-900">
      <Nav />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Experience />
      <Testimonial />
      <Contact />
    </div>
  );
}
