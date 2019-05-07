import { Types } from "./actions";

const initialState = {
    lastCommand: 'None',
}

export default (state = initialState, action) => {
    console.log(action)
    switch(action.type) {
        case Types.LAST_COMMAND:
            return {
                ...state,
                lastCommand: action.payload
            };        
        default: 
            return state;
    }
}