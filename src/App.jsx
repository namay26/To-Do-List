import { useState } from 'react'
import './style/app.css'
import Listitem from './components/Listitem'
var i=1;
const App = () => {

  const [tasks, setTasks] = useState([])

  const add = () => {
    var task=document.getElementById('toadd').value;
    i++;
    const newTask={
      id: i,
      value: task,
      status : "Pending"
    }
    setTasks([...tasks, newTask]);
    document.getElementById('toadd').value='';
  }

  return (
    <>
    <center><h1>TO DO List</h1></center>
      <div className='container' id='main-container'>
        <div className='heading' id='heading'>
          <input type='text' className='toadd' id='toadd' placeholder='Add your Item' />
          <button onClick={add} className='btn btn-primary'>Add</button>
        </div>
        <div className='item-container' id='item-container'>
          {
            tasks.map((task, index)=>(
              <Listitem key={index} task={task} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App
