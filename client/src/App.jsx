import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import Confirmation from "./components/Confirmation/Confirmation"
import { UserProvider } from "./context/userContext"
import { ProductProvider } from "./context/productContext"
import { OrderProvider } from "./context/orderContext"

function App() {

  return (
    <BrowserRouter>
    <OrderProvider>
      <UserProvider>
      <ProductProvider>
      <Header />
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/confirmation" element={<Confirmation />}/>
        </Routes>
        </ProductProvider>
      </UserProvider>
      </OrderProvider>
    </BrowserRouter>
  )
}

export default App