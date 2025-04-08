import { useState, useEffect } from 'react';
import styles from './Register.module.css';
 
const Register = () => {
    const [displayName, setDisplayName]=useState('');
    const [displayEmail, setEmail]  = useState('');
    const [displayPassword, setPassword]  = useState('');
    const [displayConfirm, setConfirm]  = useState('');
    const [error, setError] = useState('');
    
    return (
        <div>
            <h2>Cadastre-se para ter Acesso ao Site</h2>
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
                    <input type="text" name="displayName" required placeholder="E-mail" />
                </label>
                <label>
                    <span>
                        Senha:
                    </span>
                    <input type="password" name="displayName" required placeholder="Senha" />
                </label>
                <label>
                    <span>
                        Confirmar Senha:
                    </span>
                    <input type="password" name="displayName" required placeholder="Repetir Senha" />
                </label>
                 <button className="btnCadastrar">
                    Cadastrar
                </button>
            </form>
        </div>
    )
}
 
export default Register