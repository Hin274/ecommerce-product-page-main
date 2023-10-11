/* eslint-disable react/prop-types */
import Carousel from "./Carousel";
import { useState } from "react";
import Cart from "./Cart";

const ProductPage = ({isCartOpen}) => {

    const images = [
        "../images/image-product-1.jpg",
        "../images/image-product-2.jpg",
        "../images/image-product-3.jpg",
        "../images/image-product-4.jpg"
    ]

    const productName = "Fall Limited Edition Sneakers"
    const originalPrice = 250
    let discount = 0.5
    const newPrice = originalPrice * discount

    const [quantity, setQuantity] = useState(1)


    const decreaseQuantity = () => {
        if (quantity > 1  && isCartOpen === false ) {
            setQuantity(quantity - 1)
        }
    }

    const increaseQuantity = () => {
        if(isCartOpen === false){

            setQuantity(quantity + 1)
        }
    }


    return (
        <>
            <div className="relative">
            {

                isCartOpen && <Cart productName={productName} newPrice={newPrice} quantity={quantity}/>
            }
                <Carousel images={images} />
            </div>
            <div className="flex flex-col m-5 gap-2">
                <h1 className="text-main-orange uppercase font-bold text-sm tracking-widest">Sneaker Company</h1>
                <h2 className="font-bold text-3xl">{productName}</h2>
                <p className="text-dark-grayish-blue my-2">These low-profile sneakers are your perfect casual wear companion. Featuring a
                    durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
                <div className="flex justify-between items-center my-2">
                    <div className="flex gap-4 items-center">
                        <p className="font-bold text-3xl">${newPrice.toFixed(2)}</p>
                        <p className="font-bold text-main-orange rounded-lg py-1 px-2 bg-pale-orange">{discount * 100}%</p>
                    </div>
                    <p className="font-bold text-grayish-blue line-through">${originalPrice.toFixed(2)}</p>
                </div>
                <div className="flex justify-between items-center bg-light-grayish-blue p-4 px-6 rounded-lg">
                    <button aria-label="Decrease quantity" onClick={decreaseQuantity}><img src="../images/icon-minus.svg" alt="minus-icon" /></button>
                    <p className="font-bold">{quantity}</p>
                    <button aria-label="Increase quantity" onClick={increaseQuantity}><img src="../images/icon-plus.svg" alt="plus-icon" /></button>
                </div>
                <button className="flex justify-center items-center bg-main-orange rounded-lg p-4 text-main-white font-bold gap-4"><svg width="20" height="18" className="fill-main-white" viewBox="0 0 22 22"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" /></svg>Add to cart</button>
            </div>
        </>
    );
}

export default ProductPage;