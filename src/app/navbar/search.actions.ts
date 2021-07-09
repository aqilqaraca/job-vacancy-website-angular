import { Action } from "@ngrx/store"
export const SET_SEARCH = "SET_SEARCH"

export class SetActions implements Action{
    readonly type = SET_SEARCH;
    constructor(public payload : String){}
}