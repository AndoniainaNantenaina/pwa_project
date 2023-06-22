import { useState } from "react";
import ListTask from "../components/listTask";
import Navbar from "../components/navbar";
import { createTask } from "../api/task";

const Dashboard = () =>{
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [assignedTo, setAssignedTo] = useState("");
    const [author, setAuthor] = useState("");

    const handleTask = async () =>{
      await createTask({
        title : title,
        date : date,
        assignedTo : assignedTo,
        author : author
      }).then(() => {
        console.log("Task created")
      })
    }

    return(
        <div>
        <Navbar/>
        <div class="m-20 p-20 shadow-2xl">
          <header class="bg-white space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6">
          <div class="flex items-center justify-between">
            <h2 class="font-semibold text-slate-900">All tasks</h2>
            <a href="/new" class="hover:bg-yellow-600 group flex items-center rounded-md bg-yellow-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm">
              <svg width="20" height="20" fill="currentColor" class="mr-2" aria-hidden="true">
                <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
              </svg>
              New task
            </a>
           
          </div>
          </header>
          <div>            
            <label htmlFor="title">Titre</label>
            <input type="text" id="title"
            onChange={(e) => setTitle(e.target.value)} />

            <label htmlFor="date">Date</label>
            <input type="date" id="date"
            onChange={(e) => setDate(e.target.value)} />

            <label htmlFor="assignedto">Assigner a</label>
            <input type="text" id="assignedto"
            onChange={(e) => setAssignedTo(e.target.value)} />
            
            <label htmlFor="author">Author</label>
            <input type="text" id="author"
            onChange={(e) => setAuthor(e.target.value)} />

            <button
            onClick={handleTask}>Ajouter tache</button>
        </div>
          <input class="focus:ring-2 focus:ring-zinc-300 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm" type="text" aria-label="Filter tasks" placeholder="Filter tasks..."></input>
          <ListTask/>
        </div>
      </div> 
    )
}

export default Dashboard;