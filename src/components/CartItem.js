import { AiFillCaretDown, AiFillCaretUp, AiOutlineDelete } from "react-icons/ai";
import { connect } from "react-redux"
import { cartRemove, cartUpdate } from "../redux"
import Loader from "./Loader";

const CartItem = ({id, name, price, quantity, image, total_price, cartUpdate, cartData, type, cartRemove}) => {

    return ( 
        <div className="bg-gray-200	p-2 overflow-hidden flex items-center justify-between do--hover">
            <div className="flex items-center">
                {type !== "checkout" && 
                <div className="h-16 w-24 mr-4">
                    <img src={image} alt="" className="w-full h-full object-cover" />
                </div>}
                <div>
                    <h5 className="font-semibold w-3/4">{name}</h5>
                    <p className="text-sm">{price}</p>
                </div>
            </div>
            <div className="flex items-center relative h-full">
                {type !== "checkout" &&
                    <button className="on--hover hidden mx-4 text-red-500 text-xl p-2 rounded-full transition hover:bg-red-500 hover:text-white" onClick={() => cartRemove(id)}>{cartData.btnLoading ? <Loader classes="loader-sm loader-secondary"/> : <AiOutlineDelete />}</button>
                }
                <h5 className="mr-8 font-semibold">{total_price}</h5>
                <div className="flex items-center bg-gray-200 h-full">
                    <p className="p-4">{quantity}</p>
                    {type !== "checkout" &&
                    <div className="bg-gray-400 text-white h-full flex flex-col items-center justify-center">
                        <button className="hover:bg-gray-500 w-full h-full px-2" disabled={cartData.btnLoading ? true : false} onClick={() => cartUpdate(id, quantity + 1)}>{cartData.btnLoading ? <Loader classes="loader-sm loader-secondary"/> : <AiFillCaretUp />}</button>
                        <button className="hover:bg-gray-500 w-full h-full px-2" disabled={cartData.btnLoading ? true : false} onClick={() => cartUpdate(id, quantity - 1)}>{cartData.btnLoading ? <Loader classes="loader-sm loader-secondary"/> : <AiFillCaretDown />}</button>
                    </div>}
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
        cartUpdate: (productId, quantity) => dispatch(cartUpdate(productId, quantity)),
        cartRemove: (productId) => dispatch(cartRemove(productId))
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(CartItem);