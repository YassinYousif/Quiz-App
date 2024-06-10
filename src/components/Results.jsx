import { Link } from "react-router-dom";

const Results = () => {
 
    const correctAnswers = sessionStorage.getItem('correctAnswers');
    const questionsLength = sessionStorage.getItem('questionsLength');
    const solvedSub = sessionStorage.getItem('solvedSub');

    const percentage = (correctAnswers / questionsLength) * 100;


    return (
        <div className="flex flex-col items-center justify-between h-full">
            {/* Circle */}
            <div
                className="relative w-32 max-sm:w-[110px] h-32 max-sm:h-[110px] rounded-full flex items-center justify-center"
                style={{
                    background: `conic-gradient(#0094FF ${percentage}%, #e0e0e0 ${percentage}%)`
                }}
            >
                <span className="absolute text-4xl max-sm:text-[30px] font-semibold bg-white w-[80%] h-[80%] rounded-full flex justify-center items-center font-luckiest tracking-[1px]">
                    {percentage}%
                </span>
            </div>

            <div className="flex flex-col text-4xl max-sm:text-[26px]  max-sm:px-8 font-lexend font-bold gap-8">
                <div className="flex gap-6">
                    <h2>Correct Answers:</h2>
                    <span className={`${(correctAnswers <= 5) ? "text-red-600" : (correctAnswers <= 7) ? "text-yellow-500" : (correctAnswers <= 9) ?"text-green-600" : "text-[#0094FF]" }`}>{correctAnswers}</span>
                </div>
                <div className="flex gap-6">
                    <h2>Questions Length</h2>
                    <span className="text-[#0094FF]">{questionsLength}</span>
                </div>
                <div className="flex gap-6">
                    <h2>Mark by percent:</h2>
                    <span className={`${(percentage <= 50) ? "text-red-600" : (percentage <= 70) ? "text-yellow-500" : (percentage <= 90) ?"text-green-600" : "text-[#0094FF]" }`}>{percentage}%</span>
                </div>
                <div className="flex gap-6">
                    <h2>Mark:</h2>
                    <span>
                        <span className={`${(correctAnswers <= 5) ? "text-red-600" : (correctAnswers <= 7) ? "text-yellow-500" : (correctAnswers <= 9) ?"text-green-600" : "text-[#0094FF]" }`}>{correctAnswers}</span>
                        /
                        <span className="text-[#0094FF]">{questionsLength}</span>
                    </span>
                </div>
            </div>

            <div className="w-full flex justify-between gap-4 max-sm:px-4">
                <div>
                    <Link to="/">
                        <button className="font-luckiest bg-[#0094FF] text-white text-2xl rounded-[15px] hover:bg-[#0073ff] tracking-[1px] px-[40px] max-sm:px-[10px] max-sm:text-[20px] py-[10px]" style={{boxShadow: "rgb(0 0 0) 3px 3px 0px 3px, rgb(0 0 0) 0px 0px 0px 2px"}}>Go Home</button>
                    </Link>
                </div>
                <div>
                    <Link to={`/exam/${solvedSub}`}>
                        <button className="font-luckiest bg-[#0094FF] text-white text-2xl rounded-[15px] hover:bg-[#0073ff] tracking-[1px] px-[30px] max-sm:px-[5px] py-[9px] max-sm:text-[20px]" style={{boxShadow: "rgb(0 0 0) 3px 3px 0px 3px, rgb(0 0 0) 0px 0px 0px 2px"}}>Resolve Exam</button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Results;
