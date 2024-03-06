import './App.css';
import { lazy, Suspense } from 'react';
// import Articles from './components/Articles/Articles';
// import Clients from './components/Clients/Clients';
// import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Loading from './Loading/Loading';
// import Main from './components/Main/Main';
// import Navbar from './components/Navbar/Navbar';
// import Productslider from './components/Productslider/Productslider';
// import ProfessionalTeam from './components/ProfessionalTeam/ProfessionalTeam';
// import SpecialProducts from './components/SpecialProducts/SpecialProducts';
// import Subscripe from './components/Subscribe/Subscripe';
const Articles = lazy(() => import('./components/Articles/Articles'));
const Clients = lazy(() => import('./components/Clients/Clients'));
const Features = lazy(() => import('./components/Features/Features'));
const Main = lazy(() => import('./components/Main/Main'));
const Productslider = lazy(() => import('./components/Productslider/Productslider'));
const ProfessionalTeam = lazy(() => import('./components/ProfessionalTeam/ProfessionalTeam'));
const SpecialProducts = lazy(() => import('./components/SpecialProducts/SpecialProducts'));
const Subscripe = lazy(() => import('./components/Subscribe/Subscripe'));
const Navbar = lazy(() => import('./components/Navbar/Navbar'));

function App() {
  return (
   <>
  <Suspense fallback={<Loading />}> <Navbar/> </Suspense>
  <Suspense fallback={<Loading />}> <Main/> </Suspense>
  <Suspense fallback={<Loading />}> <Productslider/> </Suspense>
  <Suspense fallback={<Loading />}>  <ProfessionalTeam/> </Suspense>
  <Suspense fallback={<Loading />}> <Clients/> </Suspense>
  <Suspense fallback={<Loading />}> <SpecialProducts/> </Suspense>
  <Suspense fallback={<Loading />}> <Features/> </Suspense>
  <Suspense fallback={<Loading />}> <Articles/> </Suspense>
  <Suspense fallback={<Loading />}> <Subscripe/> </Suspense>
  <Footer/>
   </>
  );
}

export default App;
