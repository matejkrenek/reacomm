import { useEffect } from "react";
import { connect } from "react-redux";
import { AiOutlineStop, AiOutlineShoppingCart } from "react-icons/ai"
import { fetchProducts } from "../redux"

import { Title, ProductItem, Loader, Message } from "../components";

const Home = ({ productsData, fetchProducts }) => {

    useEffect(() => {
        fetchProducts()
    }, [])

    return ( 
        <div className="mt-12">
            <div className="max-w-screen-xl mx-auto bg-white px-8">
                <Title text="Products" />

                {productsData.loading
                    ? <Loader />
                    : productsData.error
                        ? <Message text={productsData.error} icon={<AiOutlineStop className="text-6xl mb-2" />}/>
                        : productsData && productsData.products
                            ? <div className="grid grid-cols-4 gap-4">
                                {productsData.products.map(({id, media, price, name}) => (
                                    <ProductItem key={id} id={id} image={media.source} price={price.formatted_with_symbol} name={name}/>
                                ))}
                            </div>
                            : <Message text="Currently we don't offering any products to buy." icon={<AiOutlineShoppingCart className="text-6xl mb-2" />}/>
                }
            </div>
        </div>
     );
}

const mapStateToProps = state => {
    return {
        productsData: state.product
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: () => dispatch(fetchProducts())
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Home);