/* eslint-disable react/prop-types */
import { useState } from "react"

const Cart = ({ productName, newPrice, quantity }) => {

    const [isEmpty, setIsEmpty] = useState(false)
    const total = newPrice * quantity

    return (
        <>
            <div className="bg-main-white rounded-lg absolute z-50 left-2 top-2 right-2 bottom-7 shadow-2xl">
                <h1 className="font-bold p-5">Cart</h1>
                <hr></hr>
                {isEmpty ?
                    <div className="flex justify-center items-center h-44">
                        <p className="text-dark-grayish-blue font-bold text-center">Your cart is empty.</p>
                    </div> :
                    <div className="flex flex-col m-5 gap-5">
                        <div className="flex justify-between">
                            <img src="./images/image-product-1-thumbnail.jpg" className="rounded-md w-12 h-12" />
                            <div className="flex flex-col">
                                <p className="text-dark-grayish-blue">{productName}</p>
                                <p className="text-dark-grayish-blue">${newPrice.toFixed(2)} x {quantity} <span className="font-bold text-main-black">${total.toFixed(2)}</span></p>
                            </div>
                            <button aria-label="Remove item"><img className="w-4" src="./images/icon-delete.svg" /></button>
                        </div>
                        <button className="rounded-lg bg-main-orange text-main-white p-4 font-bold">Checkout</button>
                    </div>
                }
            </div>
        </>
    )

}

export default Cart