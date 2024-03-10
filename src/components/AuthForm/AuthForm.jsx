// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../../apps/Auth/styles/SigInStyle.css'
// const AuthForm = ({ title, email, password, setEmail, setPassword, handleSubmit, buttonText, error, linkTo, linkText }) => {
//     return (
//         <div className="form-container">
//             <h1>{title}</h1>
//             <input
//                 type="email"
//                 value={email || ''}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Email"
//                 className="input-field"
//             />
//             <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Password"
//                 className="input-field"
//             />
//             <button onClick={handleSubmit} className="submit-button">
//                 {buttonText}
//             </button>
//             <Link to={linkTo} style={{ color: 'yellow' }}>{linkText}</Link>
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//         </div>
//     );
// };
//
// export default AuthForm;
