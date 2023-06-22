// Fichier : user.js
// Description : Ce fichier contient les fonctions pour gérer les utilisateurs dans la base de données

import PouchDB from 'pouchdb'

export const localUserDB = new PouchDB('pwa-db');
export const userDB = new PouchDB('http://localhost:5984/users/');

// Appel de la fonction de synchronisation entre la base de données local et distante
PouchDB.sync(localUserDB, userDB, {
    live: true,
    retry: true
});

// Fonction pour ajouter un utilisateur dans la base de données
export const createUser = async (user) => {

    // Vérification si l'utilisateur existe déjà
    const check = checkUser(user.email);

    if (check) {
        alert("Cet utilisateur existe déjà");
        return;
    }
    else {
        // Ajout de l'utilisateur dans la base de données
        await userDB.post(user)
        .then((res) => {
            console.log(res.id);
        })
    }
}

// Fonction pour vérifier si un utilisateur existe dans la base de données
export const checkUser = async (userEmail) => {
    const res = await userDB.find({
        selector: {
            email: userEmail
        }
    })

    return res.docs.length > 0;
}

// Fonction pour prendre un utilisateur dans la base de données à partir de son iD
export const getUser = (id) => {
    return userDB.get(id);
}
