import React from 'react'; // Mantener React importado
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
import SobreMi from './pages/SobreMi/SobreMi';
import Contacto from './pages/Contacto/Contacto';
import Personalizado from './pages/Personalizado/Personalizado';
import PoliticasEnvios from './pages/PoliticasEnvios/PoliticasEnvios';
import ShippingPolicies from './pages/ShippingPolicies/ShippingPolicies';
import ScrollToTop from './components/ScrollToTop';
import VideoShorts from './pages/VideoShorts';

// Importaciones de autenticación y administración
import SignUp from './components/SignUp';
import Login from './components/Login';
import CarouselAdmin from './components/CarouselAdmin';
import PrivateRoute from './components/PrivateRoute'; // Importa PrivateRoute
import { AuthProvider } from './contexts/AuthContext'; // Importa AuthProvider

function App() {
  return (
    <AuthProvider> {/* Envuelve toda la aplicación con AuthProvider para que el contexto esté disponible */}
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          {/* Rutas de autenticación */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />

          {/* Rutas públicas existentes */}
          <Route path="/" element={<Home />} />
          <Route path="/sobremi" element={<SobreMi />} />
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
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/personalizado" element={<Personalizado />} />
          <Route path="/politicasenvios" element={<PoliticasEnvios />} />
          <Route path="/shippingpolicies" element={<ShippingPolicies />} />
          <Route path="/videoshorts" element={<VideoShorts />} />

          {/* Ruta protegida para el panel de administración del carrusel */}
          <Route
            path="/admin-carrusel"
            element={
              <PrivateRoute> {/* Envuelve CarouselAdmin con PrivateRoute */}
                <CarouselAdmin />
              </PrivateRoute>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;