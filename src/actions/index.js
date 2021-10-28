export const addTodo = (data)=>{
    return(
        {
            type:"ADD_TODO",
            data:{data:data,id:new Date().getTime().toString()}
        }
    )
}

export const deleteTodo = (index)=>{
    return(
        {
            type:"DELETE_TODO",
            index:index
        }
    )
}

export const remove = ()=>{
    return(
        {
            type:"REMOVE_ALL"
        }
    )
}