
import Header from './components/Header';
import Banner from './components/Banner';
import Nav from './components/Nav';
import About from './components/About';
import Works from './components/Works';
import Contact from './components/Contact';
import Servcies from './components/Servcies';

function App() {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
       <Header />
       <Banner />
       <Nav />
       <About />
       <Servcies />
       <Works />
       <Contact />
       <div className='h-[4000px]'></div>
    </div>
  );
}

export default App;
