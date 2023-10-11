/* eslint-disable react/prop-types */
import NavBar from './NavBar';

const Header = ({openCart}) => {


    return (
        <>
            <header className='flex items-center p-5 justify-between'>
                <span className='flex justify-end basis-1/2'>
                    <NavBar />
                    <img className='w-36' src='./images/logo.svg' />
                </span>
                <span className='flex basis-1/5 justify-between'>
                    <button aria-label='shopping cart' onClick={openCart}><img className='w-5' src='./images/icon-cart.svg' alt='shopping cart' /></button>
                    <img className='w-6' src='./images/image-avatar.png' alt='profile picture'/>
                </span>
            </header>
        </>
    );
}

export default Header;