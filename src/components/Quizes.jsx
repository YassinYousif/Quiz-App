import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../Hooks/useFetch";

const Quizes = ({setExamDetails, examDetails}) => {

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [questionsLeft, setQuestionsLeft] = useState(0)
    const [correctAnswers, setCorrectAnswers] = useState(0)
    

    const navigate = useNavigate();
    
    const { data, isPending, err} = useFetch('http://localhost:8000/subjects');
    const { paramSub } = useParams();
    
    const answersLetters = ["a", "b", "c", "d"]
    
    let sub = null;     
    
    if (data) {
        sub = data.find((i) => i.title.toLowerCase() === paramSub);  
    }

    
    useEffect(() => {
        if (!data) return;
        
        setQuestionsLeft(sub.questions.length)
        
        }, [data])
        
        const answerSubmit = (ans) => {
            
            const correctAnswer = sub.questions[currentQuestion].rightAnswer;
            
            if ( ans === correctAnswer ) {
                setCorrectAnswers(prev => prev + 1)
            }

            setQuestionsLeft(prev => prev - 1)
            
            if ((currentQuestion + 1) === sub.questions.length) {
                navigate('/exam/results')

                sessionStorage.setItem('correctAnswers', `${correctAnswers + 1}`)
                sessionStorage.setItem('questionsLength', `${sub.questions.length}`)
                sessionStorage.setItem('solvedSub', `${sub.title}`)

                
                if ( correctAnswers ) {
                    setExamDetails({
                        correctAnswers: correctAnswers + 1,
                        questionsLength: sub.questions.length,
                    })
                } 
            }

                
            setCurrentQuestion(prev => prev + 1)
        }
            
    
    return (
        (isPending ?
            <div>Loaing..</div>
            :
            ( sub &&
                <>
                    <div className="flex flex-col justify-between h-full items-center px-10 max-sm:px-5 max-w-[544px]">
                        {/* <div className="font-luckiest py-[11px] px-[30px] text-3xl rounded-[15px] text-[#006eff] bg-transparent tracking-[1px] max-w-[483px]" style={{boxShadow: "rgb(0 0 0) 3px 3px 0px 3px, rgb(0 0 0) 0px 0px 0px 2px"}}>
                        </div> */}
                        
                        <div className="-my-[10px] max-sm:-my-[15px]">
                            <h2 className="text-4xl max-sm:text-[30px] max-sm:mb-6 font-luckiest mx-auto text-center">
                                { sub.questions ? sub.questions[currentQuestion].question : "No Question Available" }
                            </h2>
                        </div>
            
                        <div className="w-full flex flex-col items-start gap-6">
            
                            {sub.questions[currentQuestion].answers.map((answer, index) => (
                                <button className="font-luckiest text-white py-[8px] max-sm:py-[4px] px-[20px] max-sm:px-[16px] text-3xl max-sm:text-2xl rounded-[15px] bg-[#0080ff] hover:bg-[#006eff] tracking-[1px] min-w-[100%] cursor-pointer flex items-center gap-4 max-sm:gap-2 select-none text-wrap" style={{boxShadow: "rgb(0 0 0) 3px 3px 0px 3px, rgb(0 0 0) 0px 0px 0px 2px"}} key={index} onClick={() => answerSubmit(answer)}>
                                    <span>{answersLetters[index]}.</span>
                                    <h2>{answer}</h2>
                                </button>
                            ))}
            
                        </div>
            
                        <div className="flex w-full justify-between items-center text-lg font-lexend font-semibold max-sm:text-[17px] mt-3">
                            <div className="flex items-center">
                                <h4>Current Q: <span className="font-luckiest text-[20px] text-[#0080ff]">{currentQuestion + 1}</span></h4>
                            </div>
                            <div className="flex items-center">
                                <h4>Qs Left: <span className="font-luckiest text-[20px] text-[#0080ff]">{questionsLeft}</span></h4>
                            </div>
                        </div>
                    </div>
                </>
            )
        )
    );
}
 
export default Quizes;