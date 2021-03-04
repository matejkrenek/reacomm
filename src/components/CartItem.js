import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { connect } from "react-redux"
import { cartUpdate } from "../redux"

const CartItem = ({id, name, price, quantity, image, total_price, cartUpdate}) => {

    const handleIncrese = (id, quantity) => {
        console.log("fdsf")
        cartUpdate(id, quantity)
    }   

    return ( 
        <div className="bg-gray-100	p-2 overflow-hidden flex items-center justify-between">
            <div className="flex items-center">
                <div className="h-16 w-24 mr-4">
                    <img src={image} alt="" className="w-full h-full object-cover" />
                </div>
                <div >
                    <h5 className="font-semibold">{name}</h5>
                    <p className="text-sm">{price}</p>
                </div>
            </div>
            <div className="flex items-center relative h-full">
                <h5 className="mr-8 font-semibold">{total_price}</h5>
                <div className="flex items-center bg-gray-200 h-full">
                    <p className="p-4">{quantity}</p>
                    <div className="bg-gray-400 text-white h-full flex flex-col items-center justify-center">
                        <button className="hover:bg-gray-500 w-full h-full px-2" onClick={() => handleIncrese(id, quantity + 1)}><AiFillCaretUp /></button>
                        <button className="hover:bg-gray-500 w-full h-full px-2" onClick={() => handleIncrese(id, quantity - 1)}><AiFillCaretDown /></button>
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
        cartUpdate: (productId, quantity) => dispatch(cartUpdate(productId, quantity))
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(CartItem);