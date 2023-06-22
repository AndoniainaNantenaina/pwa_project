import { useState } from "react";
import { createUser } from "../api/user";

export default function Register() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const [loading, setLoading] = useState(false);

    const handleRegister = async () => {
        setLoading(true);

        if (password !== passwordConfirm) {
            alert("Les mots de passe ne correspondent pas");
            setLoading(false);
            return;
        }
        
        else {
            await createUser({
                username: username,
                email: email,
                password: password
            })
            .then((res) => {
                console.log("User created");
            })
        }

        setLoading(false);
    }

    return(
        <div className="h-screen w-screen bg-slate-800 text-white flex flex-row items-center">
            <div className="grid grid-flow-row justify-center w-full">
                <div className="flex flex-col items-center w-auto gap-2 bg-slate-400 text-white p-4 rounded-lg">
                    <h1
                    className="text-2xl font-bold"
                    >Créer un compte</h1>
                    
                    <label htmlFor="username">Nom d'utilisateur</label>
                    <input type="text" id="username" placeholder="John Doe"
                    className="p-2 rounded-md bg-slate-700 text-white"
                    onChange={(e) => setUsername(e.target.value)} />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="example@email.com"
                    className="p-2 rounded-md bg-slate-700 text-white"
                    onChange={(e) => setEmail(e.target.value)} />

                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" id="password" placeholder="********"
                    className="p-2 rounded-md bg-slate-700 text-white"
                    onChange={(e) => setPassword(e.target.value)} />
                    
                    <label htmlFor="password-confirm">Confirmer le mot de passe</label>
                    <input type="password" id="password-confirm" placeholder="********"
                    className="p-2 rounded-md bg-slate-700 text-white"
                    onChange={(e) => setPasswordConfirm(e.target.value)} />

                    <button
                    className="bg-blue-800 p-2 rounded-md w-full"
                    onClick={handleRegister}>
                        {
                            loading ? "Création" : "Créer un compte"
                        }
                    </button>
                </div>
            </div>
        </div>
    );
}
