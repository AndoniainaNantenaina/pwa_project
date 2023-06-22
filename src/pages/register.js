import { useState } from "react";
import { createUser } from "../api/user";

export default function Register() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const handleRegister = async () => {
        await createUser({
            username: username,
            email: email,
            password: password
        })
        .then((res) => {
            console.log("User created");
        })
    }

    return(
        <div>
            <h1>Créer un compte</h1>
            
            <label htmlFor="username">Nom d'utilisateur</label>
            <input type="text" id="username"
            onChange={(e) => setUsername(e.target.value)} />

            <label htmlFor="email">Email</label>
            <input type="email" id="email"
            onChange={(e) => setEmail(e.target.value)} />

            <label htmlFor="password">Mot de passe</label>
            <input type="password" id="password"
            onChange={(e) => setPassword(e.target.value)} />
            
            <label htmlFor="password-confirm">Confirmer le mot de passe</label>
            <input type="password" id="password-confirm"
            onChange={(e) => setPasswordConfirm(e.target.value)} />

            <button
            onClick={handleRegister}>Créer un compte</button>
        </div>
    );
}
