import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './routes/home/Home'
import Productdetailes from './routes/product/Productdetailes'
import Savat from './routes/savat/Savat'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`/product/:id`} element={<Productdetailes />} />
        <Route path="/savat" element={<Savat />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
    )
  }

export default App