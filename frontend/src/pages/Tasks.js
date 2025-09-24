import React, { useState } from "react";
import "../styles/Tasks.css";
import "../components/Sidebar";

const TaskAssign = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    assignedTo: "",
    dueDate: "",
    priority: "normal",
  });

  const [tasks, setTasks] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingId) {
      setTasks(
        tasks.map((t) => (t.id === editingId ? { ...task, id: editingId } : t))
      );
      setEditingId(null);
    } else {
      setTasks([...tasks, { ...task, id: Date.now() }]); // safer unique ID
    }

    setTask({
      title: "",
      description: "",
      assignedTo: "",
      dueDate: "",
      priority: "normal",
    });
  };

  const handleEdit = (task) => {
    setTask(task);
    setEditingId(task.id);
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="container">
      {/* === Form Card === */}
      <div className="card">
        <h2>{editingId ? "Edit Task" : "Assign Task"}</h2>
        <form onSubmit={handleSubmit} className="task-form">
          <div className="full-width">
            <label>Task Title</label>
            <input
              type="text"
              name="title"
              value={task.title}
              onChange={handleChange}
              placeholder="Enter task title"
              required
            />
          </div>

          <div className="full-width">
            <label>Description</label>
            <textarea
              name="description"
              value={task.description}
              onChange={handleChange}
              rows="3"
              placeholder="Enter task details"
            />
          </div>

          <div>
            <label>Assign To</label>
            <input
              type="text"
              name="assignedTo"
              value={task.assignedTo}
              onChange={handleChange}
              placeholder="Employee name"
              required
            />
          </div>

          <div>
            <label>Due Date</label>
            <input
              type="date"
              name="dueDate"
              value={task.dueDate}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Priority</label>
            <select
              name="priority"
              value={task.priority}
              onChange={handleChange}
            >
              <option value="low">Low</option>
              <option value="normal">Normal</option>
              <option value="high">High</option>
            </select>
          </div>

          <button type="submit" className="submit-btn">
            {editingId ? "Update Task" : "Assign Task"}
          </button>
        </form>
      </div>

      {/* === Task List Card === */}
      <div className="card">
        <h3>Assigned Tasks</h3>
        {tasks.length === 0 ? (
          <p style={{ textAlign: "center", color: "#475569" }}>
            No tasks assigned yet.
          </p>
        ) : (
          <div className="task-grid">
            {tasks.map((t) => (
              <div key={t.id} className="task-card">
                <div>
                  <h4>{t.title}</h4>
                  <p>{t.description || "No description"}</p>
                  <p>
                    <strong>Assigned To:</strong> {t.assignedTo}
                  </p>
                  <p>
                    <strong>Due:</strong> {t.dueDate || "N/A"}
                  </p>
                </div>

                <div className="task-actions">
                  <span className={`priority ${t.priority}`}>{t.priority}</span>
                  <button onClick={() => handleEdit(t)} className="btn btn-edit">
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(t.id)}
                    className="btn btn-delete"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskAssign;
