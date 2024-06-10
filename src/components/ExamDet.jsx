import useFetch from '../Hooks/useFetch'
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


const ExamDet = ({ subjects }) => {

    const { data, isPending, err } = subjects;

    const { choosenSub } = useParams();

    let subject = null;

    if (data) {
        subject = data.find(e => e.title.toLowerCase() === choosenSub)
    }
    // console.log(subject)

    return (
        <div className="h-full">
            {isPending ?
                <h2 className="font-luckiest text-5xl
                tracking-[2px]">Loading..</h2> 
                : 
                <div className="flex flex-col items-center w-full h-full justify-between max-sm:px-[0.35rem]">
                    <h2 className="font-luckiest text-5xl
                    max-sm:text-4xl
                    tracking-[2px] text-center ">Exam Details for<br />
                        <span className="text-[#006aff] text-[60px] max-sm:text-[40px]">{subject.title}</span>
                    </h2> 
                    <div className="">
                        <h4 className="font-luckiest text-3xl tracking-[1px] text-center">
                            Hard Level: <span className={
                                subject.hardlevel === "easy" ? "text-green-600" :
                                subject.hardlevel === "medium" ? "text-yellow-500" :
                                subject.hardlevel === "hard" ? "text-red-600" :
                                ""
                            }>{subject.hardlevel.toUpperCase()}</span>
                        </h4>
                        <h4 className="font-luckiest text-3xl tracking-[1px] text-center mt-3">
                            Questions Count: <span className="text-[#006aff]">{subject.questions.length}</span>
                        </h4>
                    </div>
                    <Link to={subject.pageL} className="items-end">
                        <button className="font-luckiest bg-[#0094FF] text-white py-[11px] px-[120px] max-sm:px-[80px] text-3xl rounded-[15px] hover:bg-[#0073ff] tracking-[2px]" style={{boxShadow: "rgb(0 0 0) 3px 3px 0px 3px, rgb(0 0 0) 0px 0px 0px 2px"}}>
                            <i>Start</i>
                        </button>
                    </Link>
                </div>
            }
        </div>
    );
}
 
export default ExamDet;
