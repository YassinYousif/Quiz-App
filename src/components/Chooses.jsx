import { Link } from 'react-router-dom';

const Chooses = ({subjects}) => {

    // console.log(subjects)

    return (
        <div className="flex flex-col h-full items-center">
            {subjects.isPending ? 
                <div className="font-luckiest text-5xl
                tracking-[2px]">Loading..</div>
            :
                <>
                    <h2 className="text-4xl font-bold font-lexend">Choose subject..</h2>
                    <div className="flex flex-col gap-8 h-full justify-center">
                        {subjects.data.map(({ title, id, detPageL }) => (
                            <Link to={detPageL} key={id}>
                                <button className="font-luckiest bg-[#0094FF] text-white py-[11px] px-[120px] max-sm:px-[80px] text-3xl rounded-[15px] hover:bg-[#0073ff] tracking-[2px] w-[400px] max-sm:w-[300px]" style={{boxShadow: "rgb(0 0 0) 3px 3px 0px 3px, rgb(0 0 0) 0px 0px 0px 2px"}}>
                                    <i>{title}</i>
                                </button>
                            </Link>
                        ))}
                    </div>
                    <p className="font-lexend text-[#555] text-[22px] font-bold -tracking-[1px] mb-8">
                        Made by ©<span className="font-cursive">Yassin</span>
                    </p>    
                </>
            }
        </div>
    );
}
 
export default Chooses;