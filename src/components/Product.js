import { AiOutlineStar, AiFillStar, AiOutlineShoppingCart} from "react-icons/ai"

const Product = () => {
    return ( 
        <div className="bg-gray-100	p-4 flex flex-col justify-between">
            <div className="mb-2 container h-2/4">
                <img className="object-cover w-full h-full" src="https://stockx-360.imgix.net/adidas-Yeezy-Boost-350-V2-Zebra/Images/adidas-Yeezy-Boost-350-V2-Zebra/Lv2/img01.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1606321670" alt=""/>
            </div>
            <div className="flex items-center justify-between mb-12">
                <h2 className="font-normal text-xl">Product title</h2>
                <div className="flex items-center gap-1">
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiOutlineStar/>
                    <AiOutlineStar/>
                </div>
            </div>
            <p className="font-semibold mb-1">120 CZK</p>
            <button className="flex items-center justify-center text-lg bg-gray-900	text-white py-2 px-6 hover:bg-gray-800 w-full">Add To Cart <AiOutlineShoppingCart className="ml-2" /></button>
        </div>
    );
}
 
export default Product;