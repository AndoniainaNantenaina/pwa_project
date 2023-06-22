import PouchDB from 'pouchdb'

export const userDB = new PouchDB('http://localhost:5984/pwa-db/');

export const createUser = async (user) => {
    await userDB.post(user)
    .then((res) => {
        console.log(res.id);
    })
}

export const getUser = (id) => {
    return userDB.get(id);
}
