
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header } from "../pages/Home.header/Header"

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Header />} />
            </Routes>
        </BrowserRouter>
    );
}