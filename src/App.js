
import './App.css';
import Dashboard from './layouts/Dashboard.jsx';
import Navi from './layouts/Navi';
import { Container } from 'semantic-ui-react';
import Footer from './layouts/Footer';
function App() {
  return (
    <div className="App">
      <Container className="main">
         <Navi/>
         <Dashboard/>
         <Footer/>
      </Container>
      
    </div>
  );
}

export default App;
