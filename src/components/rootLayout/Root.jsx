import { Outlet } from "react-router-dom"
import Nav from "./Nav"

const Root = () => {
  return (
    <>
      <Nav/>
      <Outlet/>
    </>
  )
}

export default Root