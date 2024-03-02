import { About, Introduction, Navbar } from "./components/site"
import Section from "./components/section";

function App() {
 
  return (
    <main>
      <Navbar />
      <Section id="intro" >
        <Introduction />
      </Section>
      <Section id="about">
        <About />
      </Section>
      <Section id="project">
        <p>Hello</p>
      </Section>
      <Section id="experience">
        <p>Hello</p>
      </Section>
      <Section id="testimonial">
        <p>Hello</p>
      </Section>
      <Section id="contact">
        <p>Hello</p>
      </Section>
      <footer>
        <p>Hello</p>
      </footer>
    </main>
  )
}

export default App
