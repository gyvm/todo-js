import {useContext} from "react";
import {LoginUserContext, LoginUserContextType} from "../providers/LoginUserProvider.tsx";

export const useLoginUser = (): LoginUserContextType => useContext(LoginUserContext);