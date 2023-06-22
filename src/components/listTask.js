const ListTask = () =>{
    return(
        <div class="mt-10">
            <table class="w-full border-separate border border-slate-400">
            <thead>
                <tr>
                    <th class="border border-slate-300">Title</th>
                    <th class="border border-slate-300">Date</th>
                    <th class="border border-slate-300">Description</th>
                    <th class="border border-slate-300">Author</th>
                    <th class="border border-slate-300">Assigned to</th>
                    <th class="border border-slate-300">Action</th>
                </tr>
            </thead>
            </table>
        </div>
    )
}

export default ListTask;