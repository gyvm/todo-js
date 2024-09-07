import {useCallback, useState} from "react";
import axios from "axios";
import {User} from "../types/api/user.ts";
import {useNavigate} from "react-router-dom";
import {useMessage} from "./useMessage.ts";
import {useLoginUser} from "./useLoginUser.ts";

export const useAuth = () => {
  const { showMessage } = useMessage()
  const { setLoginUser } = useLoginUser()

  const navigate = useNavigate()
  const[loading, setLoading] = useState<boolean>(false)

  const login = useCallback((id: string) => {
    axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
      if (res.data) {
        const isAdmin = res.data.id === 10
        setLoginUser({ ...res.data, isAdmin })
        showMessage({title: "ログインしました", status: "success"})
        navigate("/home")
      } else {
        showMessage({title: "ユーザが見つかりません", status: "error"})
      }
    }).catch(() => showMessage({title: "問題が発生しました", status: "error"}))
      .finally(() => setLoading(false))
  }, [navigate, setLoginUser, showMessage])
  return { login, loading }
}