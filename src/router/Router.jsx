import { ReactNode } from "react";
import {Route, Routes} from "react-router-dom";
import {Home} from "../Home";
import {Page2} from "../Page2";
import{ page1Routes } from "./page1Routes";
import {Page1} from "../Page1";
import {page2Routes} from "./page2Routes";
import {Page404} from "../Page404";

export const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/page1' >
                {page1Routes.map((route) => (
                    <Route key={route.path} path={route.path} element={route.children} />
                ))}
            </Route>
            <Route path='/page2'>
                {page2Routes.map((route) => (
                    <Route key={route.path} path={route.path} element={route.children} />
                ))}
            </Route>
            <Route path='*' element={<Page404 />} />
        </Routes>
    );
}