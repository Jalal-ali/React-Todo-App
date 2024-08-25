import { useRef , useState} from "react";

function App() {
const [todo , setTodo] = useState([]);
const todoVal = useRef()
const addTodo = (event)=>{
  event.preventDefault();
  todo.push(todoVal.current.value);
  setTodo([todoVal]);
  console.log(todo);
  
  todoVal.current.value = [ ] ;  

}

  return (
    <>
    <div className="max-w-md px-0 m-auto mt-5 ">
    <h1 className="text-center">ToDo App</h1>
    <div className="border-3 border-gray-300 border-t-2 border-b-2 rounded-xl p-5 bg-slate-950 flex">

      <form onSubmit={addTodo} className="">
      <div className="relative gap-9 flex z-0 w-74 mb-4 mt-2 group">
      <input ref={todoVal} type="text"  className="block text-center px-5 me-6 ms-auto w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-400 peer" placeholder=" " required />
      <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-cyan-600 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Text Here..</label>
      <button className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-1">ADD</button>
  </div>
      </form>
      
      <ul id="todo-list">
                    <li>sdhdjk</li> {/* Tasks will be added here dynamically  */}
                </ul>
    </div>
    
    </div>

    </>
  )
}

export default App
