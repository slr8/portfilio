import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import ScrollUp from "./components/scrollup/ScrollUp";
import Work from "./components/work/Work";
function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Home />
        <About />
        <Work />
        <Contact />
      </main>
      <ScrollUp />
    </div>
  );
}

export default App;
