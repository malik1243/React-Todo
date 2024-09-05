import { useState , useRef } from "react"

const App = () => {
  const [todo , setTodo] = useState([]);
  const todoVal = useRef()

  const addTodo = (event)=>{
    // if(!todoVal.current.value){
    //   alert("please enter a todo")
    // }
    event.preventDefault();
    todo.push(todoVal.current.value)
    setTodo([...todo]);
    console.log(todo);

    todoVal.current.value = ""
    
  }

  const deleteTodo = (index)=>{
    console.log("todo deleted" , index);
    todo.splice(index , 1);
    setTodo([...todo]);
    
  }
  const editTodo = (index)=>{
    console.log("todo edited" , index);
    const editedVal = prompt("enter value");
    todo.splice(index , 1 , editedVal);
    setTodo([...todo]);
    if(editedVal===""){
      alert("please enter a correct todo")
    }
    
  }
  return (
    <>
    <div className="Container">
    <h1 className="text-center">Todo App</h1>
    <form onSubmit={addTodo}>
      <input className="Input" type="text" placeholder="enter todo" ref={todoVal} />
      <button className="bt22" type="submit">Click</button>
    </form>
    <ul>
      {/* key ma index dena is not a good practice */}
      {todo.length>0 ? todo.map((item , index)=>{
        return <div key={index}>
          <li >{item}</li>
          <button className="bt22" onClick={()=> deleteTodo(index)}>Delete</button>
          <button className="bt22" onClick={()=> editTodo(index) }>Edit</button>
          {/* <button type="button" className="btn btn-primary">Primary</button> */}
        </div>
      }): <p>No Todo is in the list ! </p>}
    </ul>
    </div>
    </>
  )
}

export default App