import { Link } from "react-router-dom"
import { AiOutlineShoppingCart } from "react-icons/ai"

const Navbar = () => {
    return ( 
        <nav className="border-b-2 relative">
            <div className="max-w-screen-xl py-4 mx-auto flex flex-1 items-center justify-between px-8">
                <Link to="/">
                    <p className="uppercase tracking-wider text-lg font-medium"><span className="white">rea</span> comm</p>
                </Link>
                <Link to="/cart">
                    <AiOutlineShoppingCart className="text-2xl"></AiOutlineShoppingCart>
                </Link>
            </div>
        </nav>
    );
}
 
export default Navbar;