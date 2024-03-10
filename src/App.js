import {Route, Routes, Navigate} from "react-router-dom";
import AuthRoutes from "./pages/AuthRoutes/AuthRoutes";
import LayoutRoutes from "./pages/LayoutRoutes/LayoutRoutes";
import Header from "./components/header/Header";
import * as LayoutPages from "./apps/Layout";

function App() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<LayoutPages.Main/>} />
                <Route path="/*" element={<LayoutRoutes/>} />
                <Route path="/auth/*" element={<AuthRoutes/>} />
            </Routes>
        </div>
    );
}

export default App;
