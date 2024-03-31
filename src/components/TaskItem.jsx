import React, { useState } from "react";

export default function TaskItem({ task, addEditTask, markTaskAsCompleted }) {
	const [isCompleted, setIsCompleted] = useState(task.completed);

	const toggleCheckbox = () => {
		setIsCompleted(!isCompleted);
		markTaskAsCompleted(task.id);
	};

	return (
		<div
			key={task.id}
			className="p-6 border-b border-gray-200 bg-white rounded-md shadow-md flex items-center justify-between"
		>
			<div className=" flex items-center gap-4 cursor-pointer">
				{isCompleted ? (
					<span className="fa-solid fa-check-circle text-3xl text-green-600"></span>
				) : (
					<span className="fa-regular fa-circle text-3xl text-borderPrimary"></span>
				)}

				<h3
					className={task.completed ? " line-through text-gray-500" : "font-semibold text-fontPrimary"}
					onClick={toggleCheckbox}
				>
					{task.title}
				</h3>
			</div>

			<button
				className=" px-4 py-3 font-medium text-fontPrimary border-2 border-borderPrimary rounded-md"
				onClick={() => addEditTask(task.id)}
			>
				Edit
			</button>
		</div>
	);
}
