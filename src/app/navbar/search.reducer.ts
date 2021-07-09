import { Action } from "@ngrx/store"
import * as SearchAction from './search.actions'
const initialValue = {
    searchText : ""
}

export function seachReducer (state = initialValue,action : SearchAction.SetActions){
    switch(action.type){
        case SearchAction.SET_SEARCH : 
            return {searchText : action.payload}
        default : 
            return state    
    }
}