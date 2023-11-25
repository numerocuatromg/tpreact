import React, {useState} from "react";
import TaskForm from "./TaskForm";
import TaskItem from "./TaskItem";

function TaskList(){
    const [tareas, setTaskItem] = useState([]);
    
    const agregarTarea = tarea => {
        if (tarea.texto.trim()){
            tarea.texto = tarea.texto.trim();
            const tareasActualizadas= [tarea, ...tareas];
            setTaskItem(tareasActualizadas);
        }
    }

    const eliminarTarea = id => {
        const tareasActualizadas = tareas.filter(tarea => tarea.id !==id);
        setTaskItem(tareasActualizadas);
    }
    return(
       <>
            <TaskForm onSubmit={agregarTarea} />
            <div className="tareas-lista-contenedor">
                {
                    tareas.map((tarea)=>
                    <TaskItem
                    key={tarea.id}
                    id={tarea.id} 
                    texto={tarea.texto}
                    completada={tarea.completada}
                    eliminarTarea= {eliminarTarea}
                    />

                    )
                }
            </div>
       </> 
    );
}

export default TaskList;