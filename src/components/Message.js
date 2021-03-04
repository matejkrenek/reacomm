const Message = ({text, icon}) => {
    return ( 
        <div className="border-black flex items-center justify-center flex-col text-lg text-gray-200">
            {icon}
            <h5 className="mb-4">{text}</h5>
        </div>
    );
}
 
export default Message;