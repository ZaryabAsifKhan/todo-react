import React, {useState} from 'react'

function Todo() {
const [task, setTask] = useState(["Take a Shower", "Eat Breakfast", "Go to Work"]);
const [newTask, setNewTask] = useState("");

function handleChange(event){
setNewTask(event.target.value)
}

function addTask(){

    if(newTask.trim()!==""){
        setTask(t=>[...t, newTask]);
        setNewTask("");
    }
  
}

function deleteTask(index){
const updateTask = task.filter((_, i)=> i!==index);
setTask(updateTask);
}

function moveTaskUp(index){
    if(index > 0) {
        const updateTask = [...task];
       [updateTask[index -1], updateTask[index]] = [updateTask[index], updateTask[index -1]];
       setTask();
    }
}

function moveTaskDown(index){
  if(index < task.length -1) {
        const updateTask = [...task];
       [updateTask[index +1], updateTask[index]] = [updateTask[index], updateTask[index +1]];
       setTask();
    }
}


  return (
    <div className='to-do-list'>
      <h1>TODO</h1>
      <div>
        <input
        type='text'
        placeholder='Enter a task...'
        value={newTask}
        onChange={handleChange}/>

        <button className='add-button' onClick={addTask}>Add</button>

        <ol>
            {task.map((task, index)=>
            <li key={index}>
                <span className='text'>{task}</span>
                <button className='delete-task' onClick={()=> deleteTask(index)}>Delete</button>
                <button className='move-button' onClick={()=> moveTaskUp(index)}>👆</button>
                <button className='move-button' onClick={()=> moveTaskDown(index)}>👇</button>
            </li>
            )}
        </ol>
      </div>
    </div>
  )
}

export default Todo
