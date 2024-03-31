import React, { useEffect, useState } from "react";

export default function EditTaskTab({ task, updateTask, deleteTask }) {
	const [taskTitle, setTaskTitle] = useState("");

	useEffect(() => {
		if (task) {
			setTaskTitle(task.title);
		}
	}, [task]);

	return (
		<div className="bg-gray-100  col-span-4 relative">
			<div className=" bg-bgPrimary min-h-28 flex items-center justify-center text-center text-2xl text-white font-bold">
				Edit Task
			</div>

			{task ? (
				<>
					<div className="p-4">
						<label htmlFor="task-name">Task Name</label> <br />
						<input
							type="text"
							className=" bg-white p-3 outline-none focus:outline-none border border-gray-300 rounded-md mt-2 w-full"
							value={taskTitle}
							onChange={(e) => setTaskTitle(e.target.value)}
						/>
					</div>

					<div className=" p-4 absolute bottom-6 left-0 w-full grid grid-cols-5 gap-4">
						<button
							onClick={() => deleteTask(task?.id)}
							className=" bg-btnDanger text-white font-semibold py-3 px-4 rounded-lg border-2 border-borderDanger col-span-2"
						>
							Delete
						</button>
						<button
							onClick={() => updateTask(task?.id, taskTitle)}
							className=" bg-bgPrimary text-white font-semibold py-3 px-4 rounded-lg border-2 border-borderPrimary  col-span-3"
						>
							Save
						</button>
					</div>
				</>
			) : (
				<div className=" w-full text-center py-10">No Task Selected</div>
			)}
		</div>
	);
}
