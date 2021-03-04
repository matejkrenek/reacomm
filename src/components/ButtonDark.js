import { Loader } from "."

const ButtonDark = ({ text, loading, onClick }) => {
    return ( 
        <button onClick={onClick} className="flex items-center justify-center text-lg bg-gray-900	text-white py-2 px-6 hover:bg-gray-800 w-full" disabled={loading}>{loading ? <Loader size="loader"/> : text}</button>

    );
}
 
export default ButtonDark;