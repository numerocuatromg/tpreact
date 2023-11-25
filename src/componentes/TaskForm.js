import React from 'react';
import '../stylesheet/TaskForm.css'

function TaskForm(props) {
    return (
        <form className="tarea-form">
            <input
                type="text" 
                className="tarea-input"
                placeholder="Escriba una tarea"
            />
            <button className="tarea-btn">
                Agregar
            </button>
        </form>
    )
}

export default TaskForm;