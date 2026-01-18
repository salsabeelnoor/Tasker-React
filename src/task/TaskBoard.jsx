import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
import AddTaskModal from "./AddTaskModal";


export default function TaskBoard() {
    const defaultTask = {
        'id': crypto.randomUUID(),
        'title': 'Sample Task',
        'description': 'This is a sample task description.',
        'tags': ['sample', 'task'],
        'priority': 'medium',
        'isFavorite': false, 
    }
    const [tasks, setTasks] = useState([defaultTask]);
    const [showAddModal, setShowAddModal] = useState(false);
    const [taskToUpdate, setTaskToUpdate] = useState(null);

    const handleAddTask = (tasknewTask, event) => {
        event.preventDefault(); 
        setTasks([...tasks, tasknewTask]);
        setShowAddModal(false);
        
    }
    const handleEditTask = (task) => {
        setTaskToUpdate(task);
        setShowAddModal(true);
    }
  return (
    <section className="mb-20" id="tasks">
        {
            showAddModal && <AddTaskModal onSave={handleAddTask} taskToUpdate={taskToUpdate}/>
        }
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchTask/>
        </div>
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction onAddClick={() => setShowAddModal(true)} />
          <TaskList tasks={tasks} onEdit={handleEditTask} />
        </div>
      </div>
    </section>
  );
}
