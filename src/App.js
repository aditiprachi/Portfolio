import './App.css';
import Navigation from './components/nav/Navigation';
import Header from './components/header/Header';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Header></Header>
      <About></About>
      <hr className="style-one"/>
      <Skills></Skills>
      <hr className="style-one"/>
      <Projects></Projects>
      <hr className="style-one"/>
      <Experience></Experience>
      <Footer></Footer>
    </div>
  );
}

export default App;
