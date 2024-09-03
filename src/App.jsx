import "./style.css"
import {Router} from "./router/Router";
import {UserProvider} from "./providers/UserProvider";

export const App = () => {
  return (
      <UserProvider>
        <Router />
      </UserProvider>
  );
}
