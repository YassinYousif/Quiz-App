import Student from '../assets/student.json'
import Lottie from 'lottie-react';

import { Link } from 'react-router-dom'

const Welcome = () => {
    return (
        <div className="flex flex-col items-center justify-between w-full h-full">
            <h1 className="font-luckiest text-6xl">Quiz App</h1>
            <div className="flex flex-col items-center">
                <h2 className="font-lexend text-[#555] text-[30px] font-bold -tracking-[2px]">
                    Welcome to this Quiz app
                </h2>
                <div>
                    <Lottie 
                        animationData={Student}
                        className="w-[400px] h-[400px] my-[-80px] mt-[-100px]"
                    />
                </div>
                <h2 className="font-lexend text-[#555] text-[26px] font-bold -tracking-[1px]">
                    Made by ©<span className="font-cursive">Yassin</span>
                </h2>
            </div>
            <Link to='/chooses'>
                <button className="font-luckiest bg-[#0094FF] text-white py-[11px] px-[120px] text-3xl rounded-[15px] hover:bg-[#0073ff] tracking-[1px]" style={{boxShadow: "rgb(0 0 0) 3px 3px 0px 3px, rgb(0 0 0) 0px 0px 0px 2px"}}>
                    <i>Start!</i>
                </button>
            </Link>
        </div>
    );
}

export default Welcome;
