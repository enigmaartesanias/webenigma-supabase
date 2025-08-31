import React from 'react';
import './styles/styles.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
// Páginas
import Home from './pages/Home/Home';
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
import VideoShorts from './pages/VideoShorts';

// Componentes
import Header from './components/Header/Header';
import Footer from './components/Footer';

import PublicCarousel from './components/PublicCarousel';
import ProductoDetalle from './components/ProductoDetalle';


// Autenticación
import SignUp from './components/SignUp';
import Login from './components/Login';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';

// Panel de administración
import AdminPanel from './components/AdminPanel';
import CarouselAdmin from './components/CarouselAdmin';
import CategoriaAdmin from './components/CategoriaAdmin';     // ✅ Este sí existe (si lo tienes para categorías)
import ProductoAdmin from './components/ProductoAdmin';       // ✅ El que yo te di, completo

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          {/* Rutas públicas */}
          <Route path="/" element={<Home />} />
          <Route path="/sobremi" element={<SobreMi />} />
          <Route path="/plataanillos" element={<PlataAnillos />} />
          <Route path="/platapulseras" element={<PlataPulseras />} />
          <Route path="/platacollares" element={<PlataCollares />} />
          <Route path="/plataaretes" element={<PlataAretes />} />
          <Route path="/cobreanillos" element={<CobreAnillos />} />
          <Route path="/cobrepulseras" element={<CobrePulseras />} />
          <Route path="/cobrecollares" element={<CobreCollares />} />
          <Route path="/cobrearetes" element={<CobreAretes />} />
          <Route path="/alpacaanillos" element={<AlpacaAnillos />} />
          <Route path="/alpacapulseras" element={<AlpacaPulseras />} />
          <Route path="/alpacaaretes" element={<AlpacaAretes />} />
          <Route path="/alpacacollares" element={<AlpacaCollares />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/personalizado" element={<Personalizado />} />
          <Route path="/politicasenvios" element={<PoliticasEnvios />} />
          <Route path="/shippingpolicies" element={<ShippingPolicies />} />
          <Route path="/videoshorts" element={<VideoShorts />} />
          <Route path="/carrusel" element={<PublicCarousel />} />
          <Route path="/producto/:id" element={<ProductoDetalle />} />

          {/* Rutas de autenticación */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />

          {/* Panel de administración */}
          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <AdminPanel />
              </PrivateRoute>
            }
          />

          <Route
            path="/admin/carrusel"
            element={
              <PrivateRoute>
                <CarouselAdmin />
              </PrivateRoute>
            }
          />

          {/* ✅ Esta ruta es para administrar CATEGORÍAS (solo si tienes ese componente) */}
          <Route
            path="/admin/categoria"
            element={
              <PrivateRoute>
                <CategoriaAdmin />
              </PrivateRoute>
            }
          />

          {/* ✅ Esta ruta es para administrar PRODUCTOS (usa el mejorado) */}
          <Route
            path="/admin/productos"
            element={
              <PrivateRoute>
                <ProductoAdmin />
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