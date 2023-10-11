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
    
      {/* Collections
      Men
      Women
      About
      Contact

      Sneaker Company

      Fall Limited Edition Sneakers

      These low-profile sneakers are your perfect casual wear companion. Featuring a
      durable rubber outer sole, they’ll withstand everything the weather can offer.

      $125.00
      50%
      $250.00

      0
      Add to cart */}

      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>.
        Coded by <a href="https://www.frontendmentor.io/profile/Hin274">Chong Hin Yu</a>.
      </div>
    </>
  )
}

export default App
