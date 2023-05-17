import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
function App() {
  library.add(faBars, faCartShopping);
  return (
    <div className="App">
      <Header></Header>
      <div className='body'>
       
      </div>
    </div>
      
  );
}

export default App;
