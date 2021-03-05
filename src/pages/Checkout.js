import { useEffect } from "react"
import { connect } from "react-redux"
import { CartItem, Loader, Message, Title } from "../components";
import { fetchCart } from "../redux"

const Checkout = ({ cartData, fetchCart }) => {
    
    useEffect(() => {
        fetchCart()
    }, [])
    console.log(cartData.loading)

    return ( 
        <div className="mt-12">
            <div className="max-w-screen-xl mx-auto bg-white px-8">
                <Title text="Checkout" />
                <div className="grid grid-cols-6 gap-16">
                    <div className="bg-gray-100 col-span-4">
                        <form action=""></form>
                    </div>
                    <div className="bg-gray-100 col-span-2">
                        {
                            cartData.loading ? <Loader /> : cartData.cart.line_items.map(({id, name, price, quantity, media, line_total}) => (
                                <CartItem key={id} id={id} name={name} price={price.formatted_with_symbol} quantity={quantity} image={media.source} total_price={line_total.formatted_with_code} type="checkout"/>

                            ))
                        }
                    </div>
                </div>
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
 
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);