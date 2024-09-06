// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {Practice1} from "./practices/Practice1.tsx";
import {Practice2} from "./practices/Practice2.tsx";
import {Practice3} from "./practices/Practice3.tsx";
import {Practice4} from "./practices/Practice4.tsx";

function App() {

  return (
    <>
      <div className={"App"}>
        <Practice1 />
        <Practice2 />
        <Practice3 />
        <Practice4 />
      </div>
    </>
  )
}

export default App
