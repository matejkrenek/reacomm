import { AiOutlineUsb } from "react-icons/ai";
import { Message, SectionHeader, LinkDark } from "../components"

const NotFound = () => {
    return ( 
        <div>
            <SectionHeader content="404 Not Found" />
            <div className="max-w-screen-xl mx-auto bg-white px-8 flex flex-col items-center">
                <Message text="This page does not exist" icon={<AiOutlineUsb className="text-6xl mb-2"/>}/>
                <LinkDark to="/" text="Continue Shopping" type="outlined"/>
            </div>
        </div>
     );
}
 
export default NotFound;