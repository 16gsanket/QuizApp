import { ConsumeQuestionContext } from "../contexts/QuizContext";

function NextButton() {
    const {dispatch , answer , numQuestions,index} = ConsumeQuestionContext();

    if(answer === null) return null;

    if(index < numQuestions-1){

        
        return (
            <div>
            <button className="btn btn-ui" onClick={()=>dispatch({type:'nextQuestion'})}>Next</button>
            
        </div>
    )
    }else{
        return(
            <div>
            <button className="btn btn-ui" onClick={()=>dispatch({type:'finish'})}>Finished</button>
            
        </div>
        )
    }
}

export default NextButton
