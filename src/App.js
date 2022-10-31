import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/main';
import ItemListContainer2 from './components/ItemListContainer2';
import Contador from './components/Main/Contador';
import ItemListContainer from './components/Main/ItemListContainer';

const App = () => {
  return  ( 
    <>
      <Header/>
      <Main/>
      <ItemListContainer/>
      <Contador stock={300}/>
      <Footer/><ItemListContainer2 greeting />
    </>     
  );
};

export default App;
