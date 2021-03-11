import { useEffect, useState } from "react"
import { AiOutlineShoppingCart } from "react-icons/ai";
import { connect } from "react-redux"
import { CartItem, Loader, Message, SectionHeader, ShippingForm } from "../components";
import { fetchCart } from "../redux"

const steps = ["Shipping Form", "Payment Form", "Confirmation"]

const Checkout = ({ cartData, fetchCart }) => {
    const [activeStep, setActiveStep] = useState(0)
    const [shippingData, setShippingData] = useState({})

    useEffect(() => {
        fetchCart()
    }, [])

    const nextStep = () => setActiveStep(prevStep => prevStep + 1);
    const backStep = () => setActiveStep(prevStep => prevStep - 1);

    const next = (data) => {
        setShippingData(data)
        nextStep()
    }


    const Form = () => activeStep === 0 ? <ShippingForm submit={next}/> : <Loader />

    return ( 
        <div>
            <div className="bg-white ">
                <SectionHeader content="Checkout"/>
                <div className="grid grid-cols-6 gap-16 px-8 max-w-screen-xl mx-auto">

                    {cartData && cartData.cart.line_items && cartData.cart.line_items.length
                        ?   <>
                                <div className="bg-gray-100 col-span-4 p-4 h-max">
                                    <Form />
                                </div>
                                <div className="bg-gray-100 col-span-2 p-2 h-max">
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