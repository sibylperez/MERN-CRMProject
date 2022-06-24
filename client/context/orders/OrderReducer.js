import {
    SELECT_CLIENT,
    SELECT_PRODUCT,
    QUANTITY_PRODUCT
} from '../../types'

export default (state, action) => {
    switch(action.type){
        case SELECT_CLIENT:
            return {
                ...state,
                client: action.payload
            };
        case SELECT_PRODUCT:
            return {
                ...state,
                product: action.payload
            }
        default:
            return state
    }
}