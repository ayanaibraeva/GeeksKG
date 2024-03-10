import React from 'react';
import {Route, Routes} from "react-router-dom";
import * as AuthPages from "../../apps/Auth"
// здесь мы ипортируем все как AuthPages,
// все что находится внутри index.js(это Register, Login), который назодится в папке Auth

const AuthRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/register" element={<AuthPages.Register/>} />
                <Route path="/login" element={<AuthPages.Login/>} />
            </Routes>
        </div>
    );
};

export default AuthRoutes;