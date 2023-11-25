import React, {useState} from 'react';
import '../stylesheet/TaskForm.css'
import {v4 as uuidv4 } from 'uuid'


function TaskForm(props) {

    const[input, setInput] = useState('');
    const manejarCambio = e => {
        setInput(e.target.value);
    }
    
    const ManejarEnvio = e => {
        e.preventDefault();
        const tareaNueva = {
            id: uuidv4(),
            texto:input,
            completado: false
        }
        props.onSubmit(tareaNueva);
    }

    return (
        <form className="tarea-formulario"
        onSubmit={ManejarEnvio} >
            <input
                type="text" 
                className="tarea-input"
                placeholder="Escriba una tarea"
                name='texto'
                onChange={manejarCambio}
            />
            <button className="tarea-boton">
                Agregar
            </button>
        </form>
    );
}

export default TaskForm;