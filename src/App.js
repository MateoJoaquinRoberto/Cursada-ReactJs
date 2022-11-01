import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/main';
import ItemListContainer2 from './components/ItemListContainer2';
import ItemListContainer from './components/Main/ItemListContainer';
import ItemDetailContainer from './components/Main/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import{BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return  ( 
    <BrowserRouter>
      <Header/>
      <Routes> 
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/Main' element={<Main/>}/>
        <Route path='/category/:categoryName' element={<ItemListContainer/>}/>            
        <Route path='/detail/:idProd' element={ <ItemDetailContainer/>}/>
        <Route path='/cart' element={ <Cart/>}/>
       
      </Routes>
      <Footer/><ItemListContainer2 greeting />
    </BrowserRouter>     
  );
};

export default App;
