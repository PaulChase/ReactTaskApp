import React, { useState } from "react";

export default function AddTask({ addTask }) {
	const [taskTitle, setTaskTitle] = useState("");

	return (
		<div className=" bg-white p-4 rounded-lg flex items-center gap-3">
			<input
				type="text"
				className=" outline-none focus:outline-none p-3 w-full"
				autoFocus
				value={taskTitle}
				onChange={(e) => setTaskTitle(e.target.value)}
			/>
			<button
				onClick={() => addTask(taskTitle)}
				className=" bg-bgPrimary py-2 px-4 rounded-md text-white text-sm font-semibold"
			>
				Save
			</button>
		</div>
	);
}
