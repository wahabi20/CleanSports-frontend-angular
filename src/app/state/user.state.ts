
export enum UserActionsTypes{
    GO_TO_APP="[User] Go To App",
    ACTIVE_USER="[User] Select User",
    DELETE_USER="[User] Delete User",
    EDIT_USER="[User] Edit User",
    GET_ALL_USERS="[User] Get All Users",
    ADD_USER="[User] Add User",
    SEARSH_USER="[User] Searsh User",
    Go_TO_PAGE="[User] Go To Page",
    Go_TO_PREVIOS_PAGE="[User] Go To Previos Page",
    Go_TO_NEXT_PAGE="[User] Go To Next Page",
    Go_TO_PER_PAGE="[User] Go To Per Page"
    
}



export interface ActionEvent {
    type: UserActionsTypes,
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