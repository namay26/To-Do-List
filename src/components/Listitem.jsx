import React from 'react'
import '../style/listitem.css'


const Listitem = ({task}) => {

    
    const remove = () => {
        document.getElementById(task.id).remove();
    } 
    return(
        <>
            <div className='con' id={task.id}>
                <span className='item'>
                    {task.value}
                </span>
                <button onClick={remove} className='btn btn-primary'>
                    Done
                </button>
            </div>
        </>
    )
}

export default Listitem