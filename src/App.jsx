import './App.css';
import Articles from './components/Articles/Articles';
import Clients from './components/Clients/Clients';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import Productslider from './components/Productslider/Productslider';
import ProfessionalTeam from './components/ProfessionalTeam/ProfessionalTeam';
import SpecialProducts from './components/SpecialProducts/SpecialProducts';
import Subscripe from './components/Subscribe/Subscripe';


function App() {
  return (
   <>
  <Navbar/>
  <Main/>
  <Productslider/>
  <ProfessionalTeam/>
  <Clients/>
  <SpecialProducts/>
  <Features/>
  <Articles/>
  <Subscripe/>
  <Footer/>
   </>
  );
}

export default App;
