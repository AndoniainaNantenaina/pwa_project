import PouchDB from 'pouchdb'

//Declare local database
export const localtaskDB = new PouchDB('tasks');
//Declare remote database
export const taskDB = new PouchDB('http://localhost:5984/tasks/');

PouchDB.sync(localtaskDB, taskDB, {
    live : true,
    timeout : false,
    retry : true
})

export const createTask = async (task) =>{
    await taskDB.post(task).
    then((res) => res.id)
}