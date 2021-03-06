import { connect } from "react-redux"
import { Link } from "react-router-dom";
import { cartAdd } from "../redux"
import { ButtonDark } from "."

const ProductItem = ({ image, name, price, id, cartAdd, cartData}) => {

    const handleClick = () => {
        cartAdd(id, 1)
    }

    return ( 
        <div className="bg-gray-200	p-4 flex flex-col justify-between">
            <Link to={`/product/${id}`} className="mb-2 container h-2/4">
                <img className="object-cover w-full h-full" src={image} alt={name} draggable="false"/>
            </Link>
            <div className="flex items-center justify-between">
                <h2 className="font-normal text-xl mb-12">{name}</h2>
            </div>
            <p className="font-semibold">{price}</p>
            <ButtonDark loading={cartData.btnLoading} text="Add to Cart" onClick={handleClick}/>
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
        cartAdd: (productId, quantity) => dispatch(cartAdd(productId, quantity))
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);