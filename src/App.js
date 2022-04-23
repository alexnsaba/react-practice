import './App.css';
import Products from './components/Products';
import Main from './components/Main';
import Footer from './components/Footer';

const buses = [{"id":1,"name":"Jaguar","src":"jaguar.png"},{"id":2,"name":"Mash","src":"mash.png"},{"id":3,"name":"Trinity","src":"trinity.png"}];

function App() {
  return (
    <div className="App">
      <Main product="Buses"/>
      <Products products={buses}/>

      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
