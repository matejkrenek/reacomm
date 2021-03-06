const Message = ({text, icon, classes}) => {
    return ( 
        <div className={`border-black flex items-center justify-center flex-col text-lg text-gray-200 ${classes || null}`}>
            {icon}
            <h5 className="mb-4">{text}</h5>
        </div>
    );
}
 
export default Message;