import { useEffect } from "react";
import { connect } from "react-redux"
import { Title, Message, CartItem, Loader } from "../components";
import { AiOutlineShoppingCart, AiOutlineStop } from "react-icons/ai"
import { fetchCart } from "../redux"
import LinkDark from "../components/LinkDark";

const Cart = ({fetchCart, cartData}) => {

    useEffect(() => {
        fetchCart()
    }, [])


    return ( 
        <div className="mt-12">
        <div className="max-w-screen-xl mx-auto bg-white px-8">
            <Title text="Shopping Cart" />
            {cartData.loading
                    ? <Loader />
                    : cartData.error
                        ? <Message text={cartData.error} icon={<AiOutlineStop className="text-6xl mb-2" />}/>
                        : cartData && cartData.cart.line_items
                            ? <div className="grid grid-cols-1 gap-4">
                                {cartData.cart.line_items.map(({id, name, price, quantity, media, line_total}) => (
                                    <CartItem key={id} id={id} name={name} price={price.formatted_with_symbol} quantity={quantity} image={media.source} total_price={line_total.formatted_with_code}/>
                            ))}
                            <div className="flex justify-between">
                                <div>
                                    <p><span className="font-semibold">Subtotal:</span> {cartData.cart.subtotal.formatted_with_symbol}</p>
                                    <p><span className="font-semibold">Total Quantity:</span> {cartData.cart.total_items}</p>
                                </div>
                                <div className="flex gap-4">
                                    <LinkDark to="/" text="Continue Shopping" type="outlined"/>
                                    <LinkDark to="/checkout" text="Checkout" />
                                </div>
                            </div>
                            </div>
                            : <Message text="Your shopping cart is empty" icon={<AiOutlineShoppingCart className="text-6xl mb-2"/>}/>
            }
        </div>
    </div>
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
 
export default connect(mapStateToProps, mapDispatchToProps)(Cart);