import {FC, memo} from "react";
import { Routes, Route } from "react-router-dom";
import {Login} from "../components/pages/Login.tsx";
import {HomeRoutes} from "./HomeRoutes.tsx";
import {Page404} from "../components/pages/Page404.tsx";
import {HeaderLayout} from "../components/templates/HeaderLayout.tsx";
import {LoginUserProvider} from "../providers/LoginUserProvider.tsx";

export const Router: FC = memo(() => {
  return (
    <LoginUserProvider>
      <Routes>
        <Route path="/" index={true} element={<Login />} />
        <Route path="/home">
          {HomeRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={
              <HeaderLayout>{route.element}</HeaderLayout>} />
          ))}
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </LoginUserProvider>
  )
})