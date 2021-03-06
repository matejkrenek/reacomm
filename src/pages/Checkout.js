import { useEffect } from "react"
import { connect } from "react-redux"
import { CartItem, Loader, SectionHeader } from "../components";
import { fetchCart } from "../redux"

const Checkout = ({ cartData, fetchCart }) => {
    
    useEffect(() => {
        fetchCart()
    }, [])
    console.log(cartData.loading)

    return ( 
        <div>
            <div className="bg-white ">
                <SectionHeader content="Checkout"/>
                <div className="grid grid-cols-6 gap-16 px-8 max-w-screen-xl mx-auto">
                    <div className="bg-gray-100 col-span-4">
                        <form action=""></form>
                    </div>
                    {cartData.loading ? <Loader /> : 
                        <div className="bg-gray-100 col-span-2 p-2">
                            {
                                cartData && cartData.cart.line_items.map(({id, name, price, quantity, media, line_total}) => (
                                    <CartItem key={id} id={id} name={name} price={price.formatted_with_symbol} quantity={quantity} image={media.source} total_price={line_total.formatted_with_code} type="checkout"/>

                                ))
                            }
                            <div className="p-2">
                                <p><span className="font-semibold">Subtotal:</span> {cartData.cart.subtotal.formatted_with_symbol}</p>
                                <p><span className="font-semibold">Total Quantity:</span> {cartData.cart.total_items}</p>
                            </div>  
                        </div>
                    }
                    
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