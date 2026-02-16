import { Routes, Route, Navigate } from "react-router-dom";
import App from "./App";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/:geo" element={<App />} />
            <Route path="*" element={<Navigate to="/ru" />} />
        </Routes>
    );
};
