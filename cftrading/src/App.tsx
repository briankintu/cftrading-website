
import { FrappeProvider } from 'frappe-react-sdk'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'


function App() {
  

  return (
    
   
      <FrappeProvider  socketPort={import.meta.env.VITE_SOCKET_PORT ?? ''}>
         <BrowserRouter basename={import.meta.env.VITE_BASE_PATH}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path='/products' element={<Products/>} />
            <Route path='/contact' element={<Contact/>} />
        </Routes>
      </BrowserRouter>
        
       
       
      </FrappeProvider>
    
  )
}

export default App