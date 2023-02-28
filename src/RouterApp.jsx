import { Route, Routes, BrowserRouter } from "react-router-dom"
import { Home } from "./views/home/Home"
import {Header } from "./components/Header"
import {HowToCare } from'./views/howToCare/HowToCare'
import {WhatAre } from './views/whatAre/WhatAre'
export const RouterApp = () => {
    return (
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/comocuidar" element={<HowToCare />} />
                <Route path="/queson" element={<WhatAre />} />
                

            </Routes>
        </BrowserRouter>
    )
}
