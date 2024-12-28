import React from 'react';
import ReactDOM from 'react-dom/client';
import {Navbar, }  from './components/layouts/navbar';
import {Footer}  from './components/layouts/footer';
import Home from './components/pages/home';
import Contact from './components/pages/contact';
import NotFound from './components/pages/notFound';
import { BrowserRouter, Routes, Route} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <h2>Start editing to see some magic happen!</h2>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>


      <Footer />
    </BrowserRouter>
  );
}
