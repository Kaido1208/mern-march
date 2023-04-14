import './App.css';
import ShowProduct from './components/ShowProduct';
import UpdateProduct from './components/UpdateProduct';
import Main from './views/Main';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/product/:id" element={<ShowProduct /> }/>
          <Route path="/product/edit/:id" element={<UpdateProduct /> }/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
