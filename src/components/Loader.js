const Loader = ({ size }) => {
    return ( 
        <div className="w-full flex items-center justify-center">
            <span className={`loader ${size || "loader-lg"}`}></span>
        </div>
     );
}
 
export default Loader;