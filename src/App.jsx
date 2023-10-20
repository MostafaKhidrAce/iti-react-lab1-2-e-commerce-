//app css
import './App.css'

//lib
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// my components
import Counter from './component/counter/Counter'
import Footer from './component/footer/Footer'
import Header from './component/header/Header'
import Products from './component/home-page/Products';
import About from './component/about-page/About';
import ProductDetails from './component/product-details-page/ProductDetails';



function App() {


  return (
    <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Products/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/counter' element={<Counter/>} />
      <Route path='/products/:id' element={<ProductDetails/>} />
    </Routes>
    <Footer/>
    </Router>
  )
}

export default App
