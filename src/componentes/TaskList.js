import React, {useState, useEffect} from "react";
import TaskForm from "./TaskForm";
import TaskItem from "./TaskItem";

function TaskList(){
    const [tareas, setTaskItem] = useState([]);
    
    useEffect(() => {
        let datos = localStorage.getItem('tareas')
        if (datos !== null) {
            setTaskItem(JSON.parse(datos))
        }
    }, [])

    useEffect(() => {
        const datos = JSON.stringify(tareas)
        window.localStorage.setItem('tareas', datos)
    }, [ tareas ]); 
    
    const agregarTarea = tarea => {
        if (tarea.texto.trim()){
            tarea.texto = tarea.texto.trim();
            const tareasActualizadas= [...tareas, tarea];
            setTaskItem(tareasActualizadas);
        }
    }
    
    const eliminarTarea = id => {
        const tareasActualizadas = tareas.filter(tarea => tarea.id !==id);
        setTaskItem(tareasActualizadas);
    }

    const completarTarea = id =>{
        const tareasActualizadas = tareas.map(tarea => {
            if (tarea.id === id){
                tarea.completada = !tarea.completada;
            }
            return tarea;
        });
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
                    completarTarea={completarTarea}
                    eliminarTarea= {eliminarTarea}
                    />

                    )
                }
            </div>
       </> 
    );
}

export default TaskList;