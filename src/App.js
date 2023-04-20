import './App.css';
import Header from "./commons/shop/header";
import Footer from "./commons/shop/footer";
import { Router, Switch } from "react-router-dom";

function App() {
  return (
    <div className='app'>
      <Header/>
        <Switch>
          {/*<Router path="/" component={}/>*/}
        </Switch>
      <Footer/>
    </div>
  );
}

export default App;
