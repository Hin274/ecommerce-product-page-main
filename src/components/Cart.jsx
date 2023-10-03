const Cart = () => {

    return (
        <>
            <div className="bg-main-white rounded-lg absolute z-50 left-2 top-2 right-2 bottom-7 shadow-2xl">
                <h1 className="font-bold p-5">Cart</h1>
                <hr></hr>
                <div className="flex justify-center items-center h-44">
                <p className="text-dark-grayish-blue font-bold text-center">Your cart is empty.</p>
                </div>
            </div>
        </>
    )

}

export default Cart