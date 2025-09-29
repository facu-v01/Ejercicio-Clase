import "../components/css/TaskList.css";

const TaskList = ({ tasks }) => {
    return (
        <div className="task-list">
        <ul>
            {tasks.map((task) => (
            <li key={task.id} className={task.completed ? "completed" : ""}>
                <input
                type="checkbox"
                className="checkbox"
                checked={task.completed}
                readOnly
                />
                {task.title}
            </li>
            ))}
        </ul>
        </div>
    );
};

export default TaskList;
