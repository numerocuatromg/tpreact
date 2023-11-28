import React from 'react';
import '../stylesheet/TaskItem.css';
import { RiDeleteBin6Fill } from "react-icons/ri";


function TaskItem ({id, texto, completada, completarTarea, eliminarTarea}){
    return (
        <div 
            className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
            <div 
                className='tarea-texto'
                onClick={()=> completarTarea(id)} >
                {texto}
            </div>
            <div 
                className='tarea-contenedor-iconos'
                onClick={()=> eliminarTarea(id)} >
                <RiDeleteBin6Fill className='tarea-icono' />
            </div>
        </div>
    )

} 

export default TaskItem