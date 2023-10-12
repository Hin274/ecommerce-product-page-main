import { useState } from "react";
import Header from "./components/Header"
import ProductPage from "./components/ProductPage";

function App() {

  const [isCartOpen,setIsCartOpen]=useState(false)
  const openCart = ()=>{
    setIsCartOpen(prevCartState =>!prevCartState)
  }

  return (
    <>

    <Header openCart={openCart}/>
    <main>
    <ProductPage isCartOpen={isCartOpen}/>
    </main>
        <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>.
        Coded by <a href="https://www.frontendmentor.io/profile/Hin274">Chong Hin Yu</a>.
      </div>
    </>
  )
}

export default App
