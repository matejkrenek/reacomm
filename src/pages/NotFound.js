import { AiOutlineUsb } from "react-icons/ai";
import { Message, Title, LinkDark } from "../components"

const NotFound = () => {
    return ( 
        <div className="mt-12">
        <div className="max-w-screen-xl mx-auto bg-white px-8 flex flex-col items-center">
            <Title text="404 Not Found" />
            <Message text="This page does not exist" icon={<AiOutlineUsb className="text-6xl mb-2"/>}/>
            <LinkDark to="/" text="Continue Shopping" type="outlined"/>
        </div>
    </div>
     );
}
 
export default NotFound;