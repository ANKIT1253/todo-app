import React,{useContext, useEffect, useState} from 'react';
import TaskContext from '../Context/TaskContext';
import AuthContext from '../Context/AuthContext';

function TaskForm(props) {
   const init ={
    title: "",
    description: "",
    duedate: ""
   }

    const {isUpdate , data, onCancel, isPopup , btn} = props;
    const {createTask,updateTask} =useContext(TaskContext);
    const {message, setMessage,user} = useContext(AuthContext);
       const [formData,setFormData]=useState(init);

useEffect(()=>{
    setMessage("");
},[])

useEffect(()=>{
    if(isUpdate){
        setFormData(data);
    }
    else{
        setFormData(init);
    }
}, [isUpdate, data])

const submitCancel=(e)=>{
    e.preventDefault();
    if(isPopup){
        btn.current.click();
    } else{
        onCancel();
    }
    
}



       const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData((prev)=>({
            ...prev,
            [name]: value,
            userid: user.id,
            modifiedon: Date()
        }))
       }


       const submitForm=(e)=>{
       e.preventDefault();
       createTask(formData);
       }


const submitUpdate=(e)=>{
    e.preventDefault();
    updateTask(formData);
    setFormData(init);
}





    return (
        <div className='p-3 w-50'>
            <h2 className='fs-3 text-white'>{ isUpdate ? "update task" : "Create Task" }</h2>
            <div className='card p-3'>
            <form>
            <div className='mb-3'>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" className='form-control' value={formData.title} onChange={handleChange} />
                
            </div>
            <div className='mb-3'>
                <label htmlFor="title">Description</label>
                <textarea className='form-control' name='description' id='descritption' value={formData.description} onChange={handleChange}> </textarea>
            </div>
            <div className='mb-3'>
                <label htmlFor="duedate">Due Date</label>
                <input type="datetime-local" name='duedate' id='duedate' className='form-control' value={formData.duedate} onChange={handleChange} />
                {/* <textarea className='form-control' name='description' id='descritption'> </textarea> */}
            </div> 
            <p>{message}</p>
            {    isUpdate ?<>
                <button className="btn btn-primary me-2" onClick={submitUpdate} >update Task</button>
                <button className="btn btn-warning" onClick={submitCancel} >Cancel</button>
                </> :      
           <button className="btn btn-primary" onClick={submitForm}>Create Task</button>
}
        
           </form>
            </div>
           
        </div>
    );
}

export default TaskForm;