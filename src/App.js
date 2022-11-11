import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap';
import NavComponent from './component/NavComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RedirectPage from './pages/RedirectPage';
import Shop from './pages/Shop';
import CartProvider from './CartContext';

function App() {
  return (
    <CartProvider>
      <Container>
        <NavComponent></NavComponent>
        <BrowserRouter>
          <Routes>
            <Route index element={<Shop></Shop>}></Route>
            <Route path="/success" element={<RedirectPage />}></Route>
          </Routes>
        </BrowserRouter>
      </Container>
    </CartProvider>
  );
}

export default App;
