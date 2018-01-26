
const INITIAL_STATE ={
    todo:{
    name:[],
    id:[]
}
}
   
export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case "ADD":
       // return {...state,
        //     user:action.payload,
        //     id:action.id}
        console.log("add");
        return {...state,
        name:action.payload,
        id:action.id
    }
        console.log("aa",state)
            case "DELETEALL":
            return {
                ...state,
                user:'action.payload'}
            case "DELET":
            return {
                ...state,
              user:action.payload
            }
        default:
        return state;
    }
    
}