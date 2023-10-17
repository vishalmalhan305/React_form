import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import NavBar from './components/NavBar';
import NewShop from './components/NewShop';
import NewProduct from './components/NewProduct';



function App() {
  return (
    <Router>
    <h1> Hello World </h1>


    <Routes>
      <Route path='navbar' Component={NavBar}></Route>
      <Route path="newshop" Component={NewShop}/>
      <Route path="newproduct" Component={NewProduct}/>
    </Routes>
   

    </Router>
  );
}

export default App;
