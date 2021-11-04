import Loader from "react-loader-spinner";
const Spinner = () => {
    return (
      <Loader
        type="ThreeDots" 
        color="#000000" 
        height={80} 
        width={80} 
      />
    );
}

export default Spinner;