// import { addTodo,remove,deleteTodo } from "../actions";

var data = {
  data: []
};

export const myreducer = (state=data, action) => {

    switch(action.type){
        case "ADD_TODO":
            const {data,id}=action.data;
            console.log(action.data);
            return {
                ...state,
                data:[...state.data,{note:data,id:id}]
            }
        case "DELETE_TODO":
          const key=action.index;
          const newlist=state.data.filter((elem,index)=>index!==key); 
          return {...state,data:newlist}
        default: return state;
    }
};
