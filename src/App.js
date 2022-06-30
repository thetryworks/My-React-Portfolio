import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import Resume from "./components/Resume"

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
      <Portfolio />
      <Contact />
      <Resume />
    </>
  );
}

export default App;
