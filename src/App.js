import './assets/css/main.css';
// import MyApp from './pages/index';
import { BrowserRouter } from 'react-router-dom';
import Main from './layouts/main.js';

function App() {
  return (
    <>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
    </>
  );
}

export default App;
