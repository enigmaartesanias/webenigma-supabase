import './styles/styles.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import PlataAnillos from './pages/PlataAnillos/PlataAnillos';
import PlataPulseras from './pages/PlataPulseras/PlataPulseras';
import PlataCollares from './pages/PlataCollares/PlataCollares';
import PlataAretes from './pages/PlataAretes/PlataAretes';
import CobreAnillos from './pages/CobreAnillos/CobreAnillos';
import AlpacaAnillos from './pages/AlpacaAnillos/AlpacaAnillos';
import AlpacaPulseras from './pages/AlpacaPulseras/AlpacaPulseras';
import AlpacaAretes from './pages/AlpacaAretes/AlpacaAretes';
import AlpacaCollares from './pages/AlpacaCollares/AlpacaCollares';
import CobreAretes from './pages/CobreAretes/CobreAretes';
import CobrePulseras from './pages/CobrePulseras/CobrePulseras';
import CobreCollares from './pages/CobreCollares/CobreCollares';


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plataanillos" element={<PlataAnillos />} />
        <Route path="/platapulseras" element={<PlataPulseras />} />
        <Route path="/platacollares" element={<PlataCollares />} />
        <Route path="/plataaretes" element={<PlataAretes />} />
        <Route path="/cobreanillos" element={<CobreAnillos />} />
        <Route path="/cobrepulseras" element={<CobrePulseras />} />
        <Route path="/cobrecollares" element={<CobreCollares />} />
        <Route path="/alpacaanillos" element={<AlpacaAnillos />} />
        <Route path="/alpacapulseras" element={<AlpacaPulseras />} />
        <Route path="/alpacaaretes" element={<AlpacaAretes />} />
        <Route path="/alpacacollares" element={<AlpacaCollares />} />
        <Route path="/cobrearetes" element={<CobreAretes />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;