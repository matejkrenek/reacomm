import { useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { connect } from "react-redux"
import { fetchCart } from "../redux"

const Navbar = ({ cartData, fetchCart }) => {
    const location = useLocation()

    useEffect(() => {
        fetchCart()
    }, [])

    return ( 
        <nav className="border-b-2 relative">
            <div className="max-w-screen-xl py-4 mx-auto flex flex-1 items-center justify-between px-8">
                <Link to="/">
                    <p className="uppercase tracking-wider text-lg font-medium"><span className="white">rea</span> comm</p>
                </Link>
                {location.pathname !== "/cart" && location.pathname !== "/checkout" && <Link to="/cart" className="relative">
                    <AiOutlineShoppingCart className="text-2xl"></AiOutlineShoppingCart>
                    <div className="absolute bg-red-500 px-1 -top-1 -right-1.5 w-auto rounded-full text-white text-xs">{cartData.cart.total_items}</div>
                </Link>}

            </div>
        </nav>
    );
}

const mapStateToProps = state => {
    return {
        cartData: state.cart
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCart: () => dispatch(fetchCart())
    }
}
 
 
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);