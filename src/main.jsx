import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Navbar } from './Components/Navbar/Navbar.jsx';
import { Footer } from './Components/Footer/Footer.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Redux/Store/configureStore.js';
import { CategpryProvider } from './Context/categoryContext.jsx';
import { ProductsProvider } from './Context/productsContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <CategpryProvider>
          <ProductsProvider>
            <Navbar />
            <App />
            <Footer />
          </ProductsProvider>
        </CategpryProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
