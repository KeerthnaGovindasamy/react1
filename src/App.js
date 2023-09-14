import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Activities from "./components/Activities";
import Bookings from "./components/Bookings";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <TopBar />
      <NavBar />
      <Hero />
      <Activities />
      <Bookings />
      <Gallery />
      <Contact />
      <Footer />
       {/*<h1 className="text-4xl font-bold mb-4">Tailwind CSS Test</h1>*/}
    </div>
  );
}

export default App;
