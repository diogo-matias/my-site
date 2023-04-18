import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./constants";
import { Home } from "./pages";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={ROUTES.HOME} Component={Home} />
            </Routes>
        </BrowserRouter>
    );
}
