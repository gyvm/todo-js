import {UserManagement} from "../components/pages/UserManagement.tsx";
import {Setting} from "../components/pages/Setting.tsx";
import {Home} from "../components/pages/Home.tsx";
import {Page404} from "../components/pages/Page404.tsx";

export const HomeRoutes = [
    {
      path: "",
      element: <Home />
    },
  {
    path: "user_management",
    element: <UserManagement />
  },
  {
    path: "setting",
    element: <Setting />
  },
  {
    path: "*",
    element: <Page404 />
  }
]