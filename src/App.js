
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { data } from './Cars';
import HomeContainer from './Component/HomeContainer';
import Learn from './Component/Learn';
import Shop from './Component/Shop';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<HomeContainer/>}/>
      <Route path="/learn/:id" element={<Learn data={data}/>}/>
      <Route path="/shop" element={<Shop/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
