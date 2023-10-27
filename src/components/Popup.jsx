import { useContext, useEffect, useRef } from 'react';
import React from 'react';
import { dateFormat } from '../helper';
import TaskForm from "./TaskForm";
import TaskContext from '../Context/TaskContext';
import AuthContext from '../Context/AuthContext';

function Popup(props) {
    const {type,data} = props;
    const closeBtn = useRef(null);
    const { deleteTask} = useContext(TaskContext);
    const {message, setMessage} = useContext(AuthContext);  
    const OnDelete=()=>{
      if(data){
        deleteTask(data.id);
        setTimeout(()=>{
          closeBtn.current.click();
      },2000);
      }
    }
    
    useEffect(()=>{
      setMessage("");
    },[])

    

    return (
        <div className="modal" tabIndex="-1" id='task-modal'>
        <div className="modal-dialog">
          <div className="modal-content bg-primary">
            <div className="modal-header" data-bs-theme="dark">
              <button ref={closeBtn} type="button" className="btn-close" data-bs-dismiss="modal"   aria-label="Close"></button>
            </div>
            <div className="modal-body">
                {
              type === "view" ?  
              <div>
                <h4>{data?.title}</h4>
                <p>{data?.description}</p>
                <div className='d-flex'>
                    <p>MOdified On: {dateFormat(data?.modifiedon)}</p>
                    <p>Due Date: {dateFormat(data?.duedate)}</p>
                </div>
                
              </div>: 
              type === "edit" ?
              <div>
                <TaskForm isUpdate={true}  data={data} isPopup={true} btn={closeBtn}/>
              </div> :
              <div>
                {   message !== "" ? 
                <p> {message}</p>:
                <p>Are you sure? You want to delete the task?</p>
}
                <div className='d-flex'>
                  <button className='btn btn-danger me-2 ms-auto' onClick={OnDelete}>Yes</button>
                  <button className='btn btn-warning' data-bs-dismiss="modal" >No</button>

                </div>
              </div>
                }
            </div>
          </div>
        </div>
      </div>
    );
}

export default Popup;