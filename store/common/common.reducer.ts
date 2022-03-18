import { ActionType, CommonState } from "@/interfaces/redux.interface";
import { ON_TIME_CHANGE } from "@/store/common/common.action-types";

const initialState: CommonState = {
    currentTime: new Date().toLocaleTimeString(),
};

const commonReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case ON_TIME_CHANGE:
            return { ...state, currentTime: action.payload };
        default:
            return state;
    }
};

export default commonReducer;
