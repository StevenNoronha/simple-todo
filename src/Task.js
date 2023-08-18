export function Task (props){
    return(
        <div className='list' style={{backgroundColor: props.task.completed ? "greenyellow" : "yellow" }}> 
            <h1>{props.task.taskName}</h1>
            <button onClick={ () => props.deleteTask(props.task.id)}>Delete</button>
            <button onClick={ () => props.completeTask(props.task.id)}>Done</button>
          </div>
    )
}