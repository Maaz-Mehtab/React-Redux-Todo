const INITIAL_STATE = {
    todo: '',
    todos: [],
    id: []

}


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                todo: action.payload
            }

        case "DELETEALL":
            return {
                ...state,
                todo: action.payload
            }
        case "DELET":
            return {
                ...state,
                
            }
        case "DISPLAY":
            return { ...state, todos: action.payload }
            case "EDIT":
                return{
                    ...state
                }
            

            case "CLOSE_EDIT":
            return {
                ...state
              }
        default:
            return state;
    }

}