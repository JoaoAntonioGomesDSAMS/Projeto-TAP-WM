import React from "react";
import { useState, useEffect } from 'react';
import styles from "./Login.module.css";
const Login = () => {
    const [displayName, setDisplayName]=useState('');
    const [displayEmail, setEmail]  = useState('');
    const [displayPassword, setPassword]  = useState('');
    const [error, setError] = useState('');
    
    return (
        <div>
            <h2>Acesso de Login</h2>
            <form>
                <label>
                    <span>
                        Nome:
                    </span>
                    <input type="text" name="displayName" required placeholder="Nome do Usuário" />
                </label>
                <label>
                    <span>
                        E-mail:
                    </span>
                    <input type="email" name="displayName" required placeholder="E-mail" />
                </label>
                <label>
                    <span>
                        Senha:
                    </span>
                    <input type="password" name="displayName" required placeholder="Senha" />
                </label>
                 <button className="btnCadastrar">
                    Login
                </button>
            </form>
        </div>
    )
}
 
export default Login