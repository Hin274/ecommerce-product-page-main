

const NavLinks = () => {
    return (
        <ul className="text-main-black font-bold grid gap-4 lg:flex lg:text-grayish-blue lg:font-normal">
            <li ><a className="hover:border-b-2 hover:border-main-orange hover:py-8" href='#'>Collections</a></li>
            <li><a className="hover:border-b-2 hover:border-main-orange hover:py-8"  href='#'>Men</a></li>
            <li><a className="hover:border-b-2 hover:border-main-orange hover:py-8" href='#'>Women</a></li>
            <li><a className="hover:border-b-2 hover:border-main-orange hover:py-8" href='#'>About</a></li>
            <li><a className="hover:border-b-2 hover:border-main-orange hover:py-8" href='#'>Contact</a></li>
        </ul>
        
    );
}

export default NavLinks
