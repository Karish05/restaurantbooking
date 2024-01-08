import population from "../shared/data";
import userdetails from "../user/userdetails";
import restaurentdetails from "../datatable/restaurentdetails" 
const intitialValue={ stateName:[] , userData:[] , restaurentTable:[] }

const rootReducer=(state=intitialValue,action) => {
       switch(action.type){
        case "population":
            return{
            ...state,
            stateName : population
        };
        case "userdetails":
            return{
                ...state,
                userData : userdetails
            };
            case "restaurentdetails":
                return{
                    ...state,
                    restaurentTable : restaurentdetails
                }
        
        default:
            return state;
    }
}

export default rootReducer;