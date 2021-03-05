const Loader = ({ classes }) => {
    return ( 
        <div className="w-full flex items-center justify-center">
            <span className={`loader ${classes || "loader-lg"}`}></span>
        </div>
     );
}
 
export default Loader;