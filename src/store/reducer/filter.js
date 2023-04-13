import { viewType, collType } from "../action/filter"

const initialStore = {
    view_type: 1,
    coll_type: 1
}

export const TypeViewReducer = (state = initialStore, action) => {
    switch (action.type) {
        case viewType:
            return {
                ...state,
                view_type: action.payload
            }
        case collType:
            return{
                ...state,
                coll_type:action.payload
            }    
        default:
            return state
    }
}