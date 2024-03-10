import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth';
import {setEmail, setError, setPassword, setUser} from '../../../store/userSlice';
import {Link, useNavigate} from "react-router-dom";


const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {email, password, error} = useSelector(state => state.userSlice);

    const handleRegister = () => {
        const auth = getAuth();


        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid
                }));
                dispatch(setError(null));
                alert('Вы успешно зарегистрировались');
                navigate('/auth/login');
            })
            .catch(error => {
                dispatch(setError(error.message));
            });

    };

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        dispatch(setError(null));
        dispatch(setPassword({[name]: value}));
    };

    return (
        <div className="form-container">
            <h1>зарегистрироваться</h1>
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
                onChange={handleInputChange}
                name="password"
                placeholder="Password"
                className="input-field"
            />

            <button onClick={handleRegister} className="submit-button">
                Create account
            </button>
            <Link to="/auth/login" style={{color: 'yellow'}}>есть аккаунт? / войти</Link>
            {error && <p style={{color: 'red'}}>{error}</p>}
        </div>

    );
};

export default SignUp;
