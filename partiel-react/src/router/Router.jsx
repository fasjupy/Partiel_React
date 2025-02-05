import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import DetailFilm from "../pages/DetailFilm";
import NotFound from "../pages/404";

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/film/:id" element={<DetailFilm />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default AppRouter;
