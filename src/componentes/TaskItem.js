import React from 'react';
import '../stylesheet/TaskItem.css';
import { RiDeleteBin6Fill } from "react-icons/ri";

export const TaskItem = ({ texto }) => {
    return(
        <div class="tarea-contenedor">
            <div className="tarea-texto">
                {texto}
            </div>

            <div className="tarea-icono">
                <RiDeleteBin6Fill />
            </div>
        </div>

    )
}