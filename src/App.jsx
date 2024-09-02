import {PrimaryButton} from "./components/atom/button/PrimaryButton";
import {SecondaryButton} from "./components/atom/button/SecondaryButton";
import {SearchInput} from "./components/molecules/SerchInput";
import {UserCard} from "./components/organisma/user/UserCard";
// import {HeaderOnly} from "./components/templates/HeaderOnly";
import {BrowserRouter} from "react-router-dom";
import {DefaultLayout} from "./components/templates/DefaultLayout";

import "./style.css"
import {Router} from "./router/Router";

export const App = () => {
  return (
      <Router />
      // <BrowserRouter>
      //     <DefaultLayout>
      //         <PrimaryButton>PrimaryButton</PrimaryButton>
      //         <SecondaryButton>SecondaryButton</SecondaryButton>
      //         <br/>
      //         <SearchInput />
      //         <UserCard user={user}/>
      //     </DefaultLayout>
      // </BrowserRouter>
  );
}
