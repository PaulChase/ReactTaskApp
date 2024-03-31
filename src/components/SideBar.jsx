import React from "react";
import Avatar from "../assets/avatar.png";
import CupIcon from "../assets/cup.png";
import TaskItem from "./TaskItem";
import AddTask from "./AddTask";

export default function SideBar({ tasks, addTask, showAddTask, toggleShowAddTask, addEditTask, markTaskAsCompleted }) {
	return (
		<div className="  col-span-2 bg-gray-100 relative side-bar z-30 ">
			{/* header */}
			<div className=" bg-bgPrimary   min-h-28  px-6 py-2 flex items-center ">
				<div className="text-white flex items-start gap-4">
					<img src={Avatar} alt="" className=" h-14 w-14 object-cover rounded-full" />
					<div>
						<h3 className=" font-semibold m-1">Hello, John</h3>
						<p className=" text-xl italic">What are your plans for today?</p>
					</div>
				</div>
			</div>

			{/*  Go Premium */}
			<div className=" bg-bgSecondary p-6 flex items-center gap-3 relative">
				<img src={CupIcon} alt="" />

				<p className=" text-fontPrimary font-bold">Go Pro Upgrade Now</p>

				<p className=" bg-fontPrimary text-yellow-500 h-14 w-14 flex justify-center items-center font-bold absolute top-0 right-4">
					$1
				</p>
			</div>

			{/* All Tasks */}
			<div className="  mt-6 p-4 space-y-6">
				{tasks.map((task) => (
					<TaskItem key={task.id} task={task} addEditTask={addEditTask} markTaskAsCompleted={markTaskAsCompleted} />
				))}

				{showAddTask && <AddTask addTask={addTask} />}
			</div>

			{/* Add task Button */}
			<button
				onClick={toggleShowAddTask}
				className=" bg-bgPrimary h-16 w-16 flex justify-center items-center text-4xl font-bold rounded-full text-white absolute bottom-6 right-8 shadow-lg z-30"
			>
				{showAddTask ? <span className=" fa fa-close"></span> : <span className=" fa fa-plus"></span>}
			</button>
		</div>
	);
}
