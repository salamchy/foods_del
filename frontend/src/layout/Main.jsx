import { Outlet } from "react-router-dom"

const Main = () => {
  return (
    <div>
      <nav>Navbar</nav>
      <Outlet />
      <footer>Footer</footer>
    </div>
  )
}
export default Main