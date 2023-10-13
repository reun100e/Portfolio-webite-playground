import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Services from "./components/Services/services";
// import Whatsapp from "./components/Floating/whatsapp";
import Back_to_top from "./components/Floating/back_to_top";

function App() {
  return (
    <div className="App">
      <Back_to_top />
      {/* <Whatsapp /> */}
      <Navbar />
      <Intro />
      <Services />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
