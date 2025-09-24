import React, { useState } from "react";

const TaskAssign = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    assignedTo: "",
    dueDate: "",
    priority: "normal",
  });

  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you will later call your API (backend)
    setTasks([...tasks, { ...task, id: tasks.length + 1 }]);
    setTask({
      title: "",
      description: "",
      assignedTo: "",
      dueDate: "",
      priority: "normal",
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Assign a Task</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <input
          type="text"
          name="title"
          placeholder="Task Title"
          value={task.title}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="description"
          placeholder="Task Description"
          value={task.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="assignedTo"
          placeholder="Assign To (Employee Name)"
          value={task.assignedTo}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="date"
          name="dueDate"
          value={task.dueDate}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <select
          name="priority"
          value={task.priority}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="low">Low</option>
          <option value="normal">Normal</option>
          <option value="high">High</option>
        </select>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Assign Task
        </button>
      </form>

      {/* Task List */}
      <h3 className="text-lg font-semibold mt-8">Assigned Tasks</h3>
      <ul className="mt-2 space-y-2">
        {tasks.map((t) => (
          <li
            key={t.id}
            className="p-3 border rounded flex justify-between items-center"
          >
            <div>
              <strong>{t.title}</strong> → {t.assignedTo}  
              <div className="text-sm text-gray-500">
                Due: {t.dueDate || "N/A"} | Priority: {t.priority}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskAssign;
