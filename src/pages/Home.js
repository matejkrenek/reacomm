import { Title } from "../components";
import Product from "../components/Product";

const Home = () => {
    return ( 
        <div className="mt-12">
            <div className="max-w-screen-xl mx-auto bg-white">
                <Title text="Products" />
                <div className="grid grid-cols-4 gap-4">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
        </div>
     );
}
 
export default Home;