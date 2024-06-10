import Lottie from 'lottie-react';
import NotFoundLottie from '../assets/notfound.json';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center gap-4">
            <Lottie animationData={NotFoundLottie} className="w-[450px] h-[450px]" />
            <div className="justify-center items-center text-center">
                <h2 className="font-luckiest text-3xl mb-8">Oops! This page is not found.</h2>
                <Link to="/">
                    <button className="font-luckiest bg-[#0094FF] text-white py-[11px] px-[120px] text-3xl rounded-[15px] hover:bg-[#0073ff] tracking-[2px]" style={{boxShadow: "rgb(0 0 0) 3px 3px 0px 3px, rgb(0 0 0) 0px 0px 0px 2px"}}>
                        <i>Go Back</i>
                    </button>
                </Link>
            </div>
        </div>
    );
}
 
export default NotFound;