// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {UserCard} from "./components/UserCard.tsx";
import { useAllUsers } from './hooks/useAllUsers';

function App() {
  const { getUsers, userProfiles, loading, error} = useAllUsers()

  return (
    <>
      <div className={"App"}>
        <button onClick={getUsers}>データ取得</button>
        <br/>
        {error ? (
          <p style={{color: "red"}}>データの取得に失敗しました。</p>
        ) : loading ? (
          <p>ローディング中</p>
        ) : (
          <>
            {userProfiles.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </>
        )}
      </div>
    </>
  )
}

export default App
