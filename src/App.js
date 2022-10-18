import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/main';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return  ( 
    <>
      <Header/>
      <Main/>
      <Footer/><ItemListContainer greeting />
    </>     
  );
};

export default App;
