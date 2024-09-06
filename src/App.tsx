// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {Practice1} from "./practices/Practice1.tsx";
import {Practice2} from "./practices/Practice2.tsx";
import {Practice3} from "./practices/Practice3.tsx";
import {Practice4} from "./practices/Practice4.tsx";
import {useState} from "react";
import axios from "axios";
import {Todo} from "./Todo.tsx";
import {TodoType} from "./types/todo.ts";
import {Text} from "./Text.tsx";
import {UserProfile} from "./UserProfile.tsx";
import {User} from "./types/user.ts";

const user: User = {
  name: "太郎",
  // hobbies: ["映画", "ゲーム"]
}

function App() {
  const [todos, setTodos ] = useState<Array<TodoType>>([]);
  const onClickFetchData = () => {
    axios.get<Array<TodoType>>('https://jsonplaceholder.typicode.com/todos')
      .then((res) => {
        setTodos(res.data);
      });
  }

  return (
    <>
      <div className={"App"}>
        <Practice1/>
        <Practice2/>
        <Practice3/>
        <Practice4/>
        <h1>Practice 5</h1>
        <p>
          Todoデータを取得する
        </p>
        <button onClick={onClickFetchData}>Fetch Data!</button>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            title={todo.title}
            userId={todo.userId}
            completed={todo.completed}
          />
        ))}
        <h1>Practice 6</h1>
        <Text color="red" fontSize="18px"/>
        <h1>Practice 7</h1>
        <UserProfile user={user}/>
      </div>
    </>
  )
}

export default App
