import { Container, Divider, Box } from "@chakra-ui/react";
import "./App.css";
import Main from "./components/Main";
import MenuNav from "./components/MenuNav";
import Why from "./components/Why";
import Top from "./components/Top";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import { useEffect, useState } from "react";

function App() {
  const[locaton, setLocation] = useState('')
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      console.log(position
        )
    })

  },[])
  return (
    <div>
      <Box
        style={{ height: "8px", top: "0%", zIndex: "5555555 !important" }}
        position={"sticky"}
        bgGradient="linear(to-l, #833ab4, #fd1d1d, #fcb045)"
      ></Box>

      <MenuNav />
      <Main />
      <br />
      <Divider orientation="horizontal" />
      <Top />
      <br />
      <Why />
    </div>
  );
}

export default App;
