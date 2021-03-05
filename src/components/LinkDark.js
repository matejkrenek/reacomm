import { Link } from "react-router-dom"

const LinkDark = ({ text, to, type }) => {
    return ( 
        <>
            <Link to={to} className={type === "outlined" ? "flex items-center justify-center text-lg border-2 border-gray-900 text-gray-900 py-2 px-6 text-center" : "flex items-center justify-center text-lg bg-gray-900 text-white py-2 px-6 hover:bg-gray-800"} >{text}</Link>
        </>
    );
}
 
export default LinkDark;