import PropTypes from 'prop-types';
import { createContext , useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContexProvider(props){

    const [tasks, setTasks] = useState([]);

    function createTask(task) {
        setTasks([
          ...tasks,
          {
            id: tasks.length + 1,
            title: task.title,
            description: task.description,
          },
        ]);
      }
    
    function deleteTask(taskid){
        setTasks(tasks.filter(task => task.id !== taskid))
    }
    
    useEffect(() => {
        setTasks(data);
      }, []);
    
    return(
        <TaskContext.Provider value={{
            tasks,
            deleteTask,
            createTask
        }}>
            {props.children}
        </TaskContext.Provider>
    )



}

TaskContexProvider.propTypes = {
    children: PropTypes.node
};

export default TaskContexProvider;
