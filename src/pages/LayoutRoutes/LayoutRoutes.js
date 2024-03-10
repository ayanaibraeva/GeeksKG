import React from 'react';
import {Route, Routes} from "react-router-dom";
import * as LayoutPages from "../../apps/Layout/index"
import GeeksJunior from "../../apps/Layout/geeksJunior/GeeksJunior";

const LayoutRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/aboutUs" element={<LayoutPages.AboutUs/>} />
                <Route path="/advantages" element={<LayoutPages.Advantages/>} />
                <Route path="/courses" element={<LayoutPages.Courses/>} />
                <Route path="/geeksJunior" element={<LayoutPages.GeeksJunior/>} />
                <Route path="/geeksPro" element={<LayoutPages.GeeksPro/>} />
            </Routes>
        </div>
    );
};

export default LayoutRoutes;