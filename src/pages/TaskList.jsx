import React, { useContext, useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
import TaskContext from '../Context/TaskContext';
import { dateFormat } from '../helper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import Popup from '../components/Popup';


const reducer=(state,action)=>{
    switch(action.type){
        case"VIEW": return {type:"view", data:action.payload};
        case"EDIT": return {type:"edit", data:action.payload};
        case"DELETE": return {type:"delete", data:action.payload};
        default: return state ;  
    }
}

function TaskList(props) {
      const {allTasks} = useContext(TaskContext);
      const [state, dispatch] = useReducer(reducer, null);
      const [searchText, setSearchText] = useState("");
      const handleSearch = (e)=>{
        const {value} = e.target;
        setSearchText(value);
      }

      const filteredTasks   = allTasks?.filter((item)=>{
      return item.title.toLowerCase().indexOf(searchText.toLowerCase()) >= 0
      })

    return (
        <div className='container p-4 mt-5 bg-primary text-white'>
            <div className="d-flex">
                <h3>Task List</h3>
                <Link className='btn btn-info ms-auto' to="/create-task"> Create Task</Link>
            </div>

            <div className='py-2 search bar'> 
            <span className='search-icon'>
                <FontAwesomeIcon   color="black" icon={faSearch} />  </span>
            <input type="text" className='form-control' placeholder='search task' onChange={handleSearch} />
            </div>
            <div className='task-header d-flex'>
                <div className='task-id'> Sr. No. </div>
                <div className="task-title">Title</div>
                <div className="task-desc">Description</div>
                <div className='task-duedate'>Due Date</div>
                <div className='task-actions'>Actions</div>
            </div>
          {  
          filteredTasks ?.map((task)=>{
            return(
             <div  key={task.id}className='task-row d-flex align-items-center mb-3  rounded-3 px-3 py-3'>
                <div className='task-id px-2'>{task.id}  </div>
                <div className="task-title px-2">{task.title}</div>
                <div className="task-desc px-2">{task.description}</div>
                <div className='task-duedate px-2'>{dateFormat(task.duedate)}</div>
                <div className='task-actions px-2'  >
                    <span className='px-2' data-bs-toggle="modal" data-bs-target="#task-modal" onClick={()=>dispatch({type:"VIEW" , payload:task})}><FontAwesomeIcon  icon={faEye}/></span>
                    <span className='px-2'  data-bs-toggle="modal" data-bs-target="#task-modal" onClick={()=>dispatch({type:"EDIT" , payload:task})}><FontAwesomeIcon  icon={faEdit}/></span>
                    <span className='px-2'  data-bs-toggle="modal" data-bs-target="#task-modal" onClick={()=>dispatch({type:"DELETE" , payload:task})}><FontAwesomeIcon  icon={faTrash}/></span>
                </div>
            </div>
            )
          })
           
         }

         <Popup type={state?.type} data={state?.data}/>
        </div>
    );
}

export default TaskList;