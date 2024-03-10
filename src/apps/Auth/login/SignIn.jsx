import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {Link, useNavigate} from 'react-router-dom';
import '../styles/SigInStyle.css'
import {setEmail, setError, setPassword} from "../../../store/userSlice";

const SignIn = () => {
    const {email, password, error} = useSelector(state => state.userSlice);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = () => {
        const auth = getAuth();

        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                dispatch(setEmail(''));
                dispatch(setPassword(''));
                dispatch(setError(''));
                navigate('/');
            })
            .catch(error => {
                dispatch(setError(error.message));
            });
    }


    return (
        <div className="form-container">
            <h1>Войти в систему</h1>
            <input
                type="email"
                value={email}
                onChange={(e) => dispatch(setEmail(e.target.value))}
                placeholder="Email"
                className="input-field"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => dispatch(setPassword(e.target.value))}
                placeholder="Password"
                className="input-field"
            />

            <button onClick={handleLogin} className="submit-button">
                Log in
            </button>

            <Link to="/auth/register" style={{color: 'yellow'}}>Нет аккаунта?/Зарегистрироваться</Link>
            {
                error &&
                <p style={{color: 'red'}}>{error}</p>
            }
        </div>
    );
};

export default SignIn;
