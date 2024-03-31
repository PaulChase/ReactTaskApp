import { useEffect, useState } from "react";
import SideBar from "./components/SideBar";
import { v4 as uuidv4 } from "uuid";
import EditTaskTab from "./components/EditTaskTab";

const demoTasks = [
	{
		id: 1,
		title: "Learn React",
		completed: true,
	},
	{
		id: 2,
		title: "Learn Vite",
		completed: true,
	},
	{
		id: 3,
		title: "Build a React App with Vite",
		completed: false,
	},
];

function App() {
	const [tasks, setTasks] = useState([]);
	const [showAddTask, setShowAddTask] = useState(false);
	const [taskToEdit, setTaskToEdit] = useState(null);

	const handleAddTask = (title) => {
		if (!title) return;
		setTasks((prev) => [...prev, { id: uuidv4(), title, completed: false }]);

		toggleShowAddTask();
	};

	const toggleShowAddTask = () => {
		setShowAddTask(!showAddTask);
	};

	const handleAddEditTask = (taskId) => {
		const task = tasks.find((task) => task.id === taskId);

		setTaskToEdit(task);
	};

	const handleUpdateTask = (taskId, newTitle) => {
		if (!newTitle) return;
		setTasks((prevTasks) => prevTasks.map((task) => (task.id === taskId ? { ...task, title: newTitle } : task)));
	};

	const handleDeleteTask = (taskId) => {
		setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
		setTaskToEdit(null);
	};

	const markTaskAsCompleted = (taskId) => {
		setTasks((prevTasks) =>
			prevTasks.map((task) => (task.id === taskId ? { ...task, completed: !task.completed } : task))
		);
	};

	useEffect(() => {
		setTasks(demoTasks);
	}, []);

	return (
		<main className=" grid grid-cols-6 min-h-screen">
			<SideBar
				tasks={tasks}
				addTask={handleAddTask}
				showAddTask={showAddTask}
				toggleShowAddTask={toggleShowAddTask}
				addEditTask={handleAddEditTask}
				markTaskAsCompleted={markTaskAsCompleted}
			/>
			<EditTaskTab task={taskToEdit} updateTask={handleUpdateTask} deleteTask={handleDeleteTask} />
		</main>
	);
}

export default App;
