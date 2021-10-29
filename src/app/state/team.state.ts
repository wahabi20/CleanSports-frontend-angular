
export enum TeamActionsTypes{
    SEND_LIST="[Team] Send list Of Players ",
    
    
}



export interface ActionEvent {
    type: TeamActionsTypes,
    payload?:any
}



export enum DataStateEnum {
    LOADING,
    LOADED,
    ERROR
}


export interface AppDataState<T> {
    dataState?: DataStateEnum, /* ? pour dire l'attribut n'est pas obligatoire  */
    data?:T, /* T liste des utilisateurs ou autre chose */
    errorMessage?:string
}