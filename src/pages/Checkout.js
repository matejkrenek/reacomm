import { useEffect } from "react"
import { AiOutlineShoppingCart } from "react-icons/ai";
import { connect } from "react-redux"
import { ButtonDark, CartItem, LinkDark, Loader, Message, SectionHeader } from "../components";
import { fetchCart } from "../redux"

const Checkout = ({ cartData, fetchCart }) => {
    
    useEffect(() => {
        fetchCart()
    }, [])

    return ( 
        <div>
            <div className="bg-white ">
                <SectionHeader content="Checkout"/>
                <div className="grid grid-cols-6 gap-16 px-8 max-w-screen-xl mx-auto">

                    {cartData && cartData.cart.line_items && cartData.cart.line_items.length
                        ?   <>
                                <div className="bg-gray-200 col-span-4 p-4 h-max">
                                    <h1 className="text-xl mb-6 font-semibold">Shipping Details</h1>
                                    <form action="">
                                        <div className="flex gap-8 mb-4">
                                            <div className="flex flex-col w-2/4">
                                                <label htmlFor="first-name" className="mb-1">First Name</label>
                                                <input type="text" name="first-name" id="first-name" className="py-2 px-4 outline-none"/>
                                            </div>
                                            <div className="flex flex-col w-2/4">
                                                <label htmlFor="last-name" className="mb-1">Last Name</label>
                                                <input type="text" name="last-name" id="last-name" className="py-2 px-4 outline-none"/>
                                            </div>
                                        </div>
                                        <div className="flex gap-8 mb-4">
                                            <div className="flex flex-col w-2/4">
                                                <label htmlFor="street" className="mb-1">Street Address</label>
                                                <input type="street" name="street" id="street" className="py-2 px-4 outline-none"/>
                                            </div>
                                            <div className="flex flex-col w-2/4">
                                                <label htmlFor="email" className="mb-1">Email Address</label>
                                                <input type="email" name="email" id="email" className="py-2 px-4 outline-none"/>
                                            </div>
                                        </div>
                                        <div className="flex gap-8 mb-4">
                                            <div className="flex flex-col w-2/4">
                                                <label htmlFor="city" className="mb-1">City</label>
                                                <input type="city" name="city" id="city" className="py-2 px-4 outline-none"/>
                                            </div>
                                            <div className="flex flex-col w-2/4">
                                                <label htmlFor="zipcode" className="mb-1">Zip Code</label>
                                                <input type="zipcode" name="zipcode" id="zipcode" className="py-2 px-4 outline-none"/>
                                            </div>
                                        </div>
                                        <div className="flex gap-8 mb-4 justify-between">
                                            <LinkDark to="/cart" text="Back" type="outlined"/>
                                            <ButtonDark text="Continue" />
                                        </div>
                                    </form>
                                </div>
                                <div className="bg-gray-200 col-span-2 p-2 h-max">
                                    {cartData.loading ? <Loader classes="loader"/>
                                    : <>
                                        {cartData.cart.line_items.map(({id, name, price, quantity, line_total}) => (
                                                <CartItem key={id} id={id} name={name} price={price.formatted_with_symbol} quantity={quantity} total_price={line_total.formatted_with_code} type="checkout"/>
                                        ))}
                                        <div className="p-2">
                                            <p><span className="font-semibold">Subtotal:</span> {cartData.cart.subtotal.formatted_with_symbol}</p>
                                            <p><span className="font-semibold">Total Quantity:</span> {cartData.cart.total_items}</p>
                                        </div>
                                    </>
                                    }
  
                                </div>  
                            </>
                        : <Message text="Your shopping cart is empty" classes="col-span-full" icon={<AiOutlineShoppingCart className="text-6xl mb-2"/>} />
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