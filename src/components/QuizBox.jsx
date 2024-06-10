import Welcome from "./Welcome";
import Chooses from "./Chooses";
import { Route, Routes } from "react-router-dom";
import Quizes from "./Quizes";
import ExamDet from "./ExamDet";
import NotFound from "./NotFound";
import Results from "./Results";
import useFetch from "../Hooks/useFetch";
import { useState } from "react";

const QuizBox = () => {

    const [examDetails, setExamDetails] = useState(null)
    const subjectData = useFetch('http://localhost:8000/subjects');

    return (
        <div className="w-[544px] h-[690px] bg-white rounded-[14px] flex flex-col items-center justify-between pt-11 pb-8 shadow-lg max-sm:mx-4">
            <Routes>
                <Route path="/*" element={<NotFound />} />
                <Route path="/" element={<Welcome />} />
                <Route path="/chooses" element={
                    <Chooses 
                        subjects={subjectData}
                    />
                } /> 
                <Route path="/exam/:paramSub" element={
                    <Quizes
                        setExamDetails={setExamDetails}
                        examDetails={examDetails}
                    />
                } />
                <Route path="/exam-details/:choosenSub" element={
                    <ExamDet 
                        subjects={subjectData}
                    />
                } />
                <Route path="/exam/results" element={
                    <Results 
                        examDetails={examDetails}
                    />
                } />
            </Routes>
        </div>
    );
}

export default QuizBox;