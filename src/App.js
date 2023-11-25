import './App.css';
import TaskList from './componentes/TaskList'
import TaskItem from './componentes/TaskItem';
import TaskForm from './componentes/TaskForm';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='tareas-lista-principal'>
        <h1>Lista de Tareas</h1>
        <TaskList/>

      </div>
      
       
    </div>
  );
}

export default App;
