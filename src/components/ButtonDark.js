import { Loader } from "."

const ButtonDark = ({ text, loading, onClick, classes }) => {
    return ( 
        <button onClick={onClick} className={`flex items-center justify-center text-lg bg-gray-900 text-white py-2 px-6 hover:bg-gray-800 ${classes}`} disabled={loading}>{loading ? <Loader classes="loader-secondary"/> : text}</button>
    );
}
 
export default ButtonDark;